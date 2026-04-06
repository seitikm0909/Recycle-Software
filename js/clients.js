(function () {
  function transactionStatusLabel(type, t) {
    return type === 'purchase' ? t('purchased') : t('sold');
  }

  function transactionTypeLabel(type, t) {
    return type === 'purchase' ? t('purchaseLabel') : t('saleLabel');
  }

  function renderMobileClientRow(record, t) {
    return `
      <td colspan="8" class="mobile-client-row-cell">
        <div class="mobile-client-row line1">
          <strong>${record.clientName || '-'}</strong> · ${record.clientId || '-'} · ${record.phone || '-'}<br/>
          ${record.entryDate || ''} · ${record.transactionCode || ''} · ${transactionTypeLabel(record.type, t)} · ${record.total || ''}
        </div>
        <div class="mobile-client-row line2">
          <strong>${t('category')}:</strong> ${record.category || '-'} |
          <strong>${t('description')}:</strong> ${record.description || '-'} |
          <strong>${t('status')}:</strong> ${transactionStatusLabel(record.type, t)}
        </div>
        <div class="mobile-client-row line3">
          <button class="printRow">${t('printLabel')}</button>
          <button class="editRow">${t('edit')}</button>
          <button class="printClientHistoryRow">${t('printClientHistory')}</button>
          <button class="deleteClientRow">${t('deleteClient')}</button>
        </div>
      </td>`;
  }

  function upsertClientProfile(transactionRecord, ctx) {
    const key = window.RecycleStorage.KEYS.clients;
    const clients = window.RecycleStorage.readJson(key, []);
    const idx = clients.findIndex((row) => row.clientId === transactionRecord.clientId);
    const existing = idx >= 0 ? clients[idx] : null;
    const metadata = window.RecycleAudit.buildRecordMetadata({ existingRecord: existing, device: ctx.device, user: ctx.user });
    const payload = {
      ...(existing || {}),
      clientId: transactionRecord.clientId,
      clientName: transactionRecord.clientName,
      phone: transactionRecord.phone,
      address: transactionRecord.address,
      last_transaction_code: transactionRecord.transactionCode,
      ...metadata
    };
    if (idx >= 0) clients[idx] = payload;
    else clients.push(payload);
    window.RecycleStorage.writeJson(key, clients);
  }

  window.RecycleClients = {
    renderMobileClientRow,
    transactionStatusLabel,
    transactionTypeLabel,
    upsertClientProfile
  };
})();
