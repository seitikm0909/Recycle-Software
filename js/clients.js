(function () {
  function transactionStatusLabel(type, t) {
    return type === 'purchase' ? t('purchased') : t('sold');
  }

  function renderMobileClientRow(record, t) {
    return `
      <td colspan="8" class="mobile-client-row-cell">
        <div class="mobile-client-row line1">
          <strong>${record.clientName || '-'}</strong> · ${record.clientId || '-'} · ${record.phone || '-'}<br/>
          ${record.entryDate || ''} · ${record.transactionCode || ''} · ${record.type || ''} · ${record.total || ''}
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

  window.RecycleClients = { renderMobileClientRow, transactionStatusLabel };
})();
