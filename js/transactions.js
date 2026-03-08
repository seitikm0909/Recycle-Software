(function () {
  function normalizeTransactionRecord(record, ctx) {
    const metadata = window.RecycleAudit.buildRecordMetadata({ existingRecord: record, device: ctx.device, user: ctx.user });
    return {
      ...record,
      _id: record._id || metadata.record_id,
      createdAt: record.createdAt || metadata.created_at,
      updatedAt: metadata.updated_at,
      ...metadata
    };
  }

  function saveTransaction({ data, type, editingId, ctx }) {
    const key = window.RecycleStorage.KEYS.transactions;
    const transactions = window.RecycleStorage.readJson(key, []);
    const idx = editingId ? transactions.findIndex((row) => row._id === editingId) : -1;
    const existing = idx >= 0 ? transactions[idx] : null;

    const normalized = normalizeTransactionRecord({
      ...(existing || {}),
      ...data,
      type,
      total: Number(data.total || 0),
      unitPrice: Number(data.unitPrice || 0),
      quantity: Number(data.quantity || 0),
      sync_status: 'pending'
    }, ctx);

    if (idx >= 0) transactions[idx] = normalized;
    else transactions.push(normalized);

    window.RecycleStorage.writeJson(key, transactions);
    window.RecycleSync.enqueueOperation({ entity: 'transaction', operation: idx >= 0 ? 'update' : 'create', record: normalized });
    window.RecycleAudit.appendAuditLog(idx >= 0 ? 'update' : 'create', 'transaction', normalized, ctx);

    const historyKey = window.RecycleStorage.KEYS.kobutsuHistory;
    const history = window.RecycleStorage.readJson(historyKey, []);
    history.push({
      history_id: window.RecycleUtils.generateId('kobutsu'),
      transaction_record_id: normalized.record_id,
      transaction_code: normalized.transactionCode,
      transaction_type: normalized.type,
      amount: normalized.total,
      ...window.RecycleAudit.buildRecordMetadata({ existingRecord: null, device: ctx.device, user: ctx.user })
    });
    window.RecycleStorage.writeJson(historyKey, history);

    window.RecycleClients.upsertClientProfile(normalized, ctx);
    window.RecycleInventory.appendInventoryMovements(normalized, ctx);

    return { transaction: normalized, transactions };
  }

  function migrateTransactions(ctx) {
    const key = window.RecycleStorage.KEYS.transactions;
    const rows = window.RecycleStorage.readJson(key, []);
    let changed = false;
    const normalized = rows.map((row) => {
      if (row.record_id && row.created_by_device_id && row.sync_status) return row;
      changed = true;
      return normalizeTransactionRecord({ ...row, sync_status: row.sync_status || 'pending' }, ctx);
    });
    if (changed) window.RecycleStorage.writeJson(key, normalized);
    return normalized;
  }

  window.RecycleTransactions = {
    saveTransaction,
    migrateTransactions
  };
})();
