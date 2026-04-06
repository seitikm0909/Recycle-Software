(function () {
  const VALID_SYNC_STATUS = ['pending', 'synced', 'error'];

  function normalizeSyncStatus(value) {
    return VALID_SYNC_STATUS.includes(value) ? value : 'pending';
  }

  function buildMetadata(existingRecord, device) {
    const now = window.RecycleUtils.nowIso();
    return {
      record_id: existingRecord?.record_id || window.RecycleUtils.generateId('record'),
      created_at: existingRecord?.created_at || now,
      updated_at: now,
      created_by_device_id: existingRecord?.created_by_device_id || device.device_id,
      created_by_device_name: existingRecord?.created_by_device_name || device.device_name,
      created_by_device_type: existingRecord?.created_by_device_type || device.device_type,
      created_by_user_id: existingRecord?.created_by_user_id || 'local_user',
      created_by_user_name: existingRecord?.created_by_user_name || 'Local User',
      sync_status: normalizeSyncStatus(existingRecord?.sync_status),
      last_synced_at: existingRecord?.last_synced_at || null
    };
  }

  function normalizeTransactionRecord(record, device) {
    const metadata = buildMetadata(record, device);
    return {
      ...record,
      _id: record._id || metadata.record_id,
      createdAt: record.createdAt || metadata.created_at,
      updatedAt: metadata.updated_at,
      ...metadata
    };
  }

  function saveTransaction({ data, type, editingId, device }) {
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
    }, device);

    if (idx >= 0) transactions[idx] = normalized;
    else transactions.push(normalized);

    window.RecycleStorage.writeJson(key, transactions);
    return { transaction: normalized, transactions };
  }

  function migrateTransactions(device) {
    const key = window.RecycleStorage.KEYS.transactions;
    const rows = window.RecycleStorage.readJson(key, []);
    let changed = false;
    const normalized = rows.map((row) => {
      if (row.record_id && row.created_by_device_id && VALID_SYNC_STATUS.includes(row.sync_status)) return row;
      changed = true;
      return normalizeTransactionRecord({ ...row, sync_status: normalizeSyncStatus(row.sync_status) }, device);
    });
    if (changed) window.RecycleStorage.writeJson(key, normalized);
    return normalized;
  }

  window.RecycleTransactions = {
    saveTransaction,
    migrateTransactions,
    normalizeSyncStatus
  };
})();
