(function () {
  function ensureConfirmModal(getTranslation) {
    let modal = document.getElementById('confirmSaveModal');
    if (modal) return modal;

    modal = document.createElement('dialog');
    modal.id = 'confirmSaveModal';
    modal.className = 'confirm-save-modal';
    modal.innerHTML = `
      <form method="dialog" class="confirm-save-card">
        <h3 data-role="title"></h3>
        <p data-role="message"></p>
        <div class="button-row">
          <button type="button" data-role="yes" class="primary"></button>
          <button type="button" data-role="cancel"></button>
        </div>
      </form>`;
    document.body.appendChild(modal);

    const t = getTranslation || ((k) => k);
    modal.querySelector('[data-role="title"]').textContent = t('confirmSaveTitle');
    modal.querySelector('[data-role="message"]').textContent = t('confirmSaveMessage');
    modal.querySelector('[data-role="yes"]').textContent = t('yes');
    modal.querySelector('[data-role="cancel"]').textContent = t('cancel');
    return modal;
  }

  function showSaveConfirmModal({ getTranslation, onConfirm, onCancel, focusBackTo } = {}) {
    const modal = ensureConfirmModal(getTranslation);
    const t = getTranslation || ((k) => k);
    const yesBtn = modal.querySelector('[data-role="yes"]');
    const cancelBtn = modal.querySelector('[data-role="cancel"]');
    modal.querySelector('[data-role="title"]').textContent = t('confirmSaveTitle');
    modal.querySelector('[data-role="message"]').textContent = t('confirmSaveMessage');
    yesBtn.textContent = t('yes');
    cancelBtn.textContent = t('cancel');

    const cleanup = () => {
      yesBtn.onclick = null;
      cancelBtn.onclick = null;
      modal.oncancel = null;
      modal.onclose = null;
      document.removeEventListener('keydown', onKeyDown, true);
    };

    const resolveConfirm = () => {
      cleanup();
      modal.close('yes');
      onConfirm && onConfirm();
    };
    const resolveCancel = () => {
      cleanup();
      modal.close('cancel');
      onCancel && onCancel();
      if (focusBackTo && typeof focusBackTo.focus === 'function') focusBackTo.focus();
    };

    const onKeyDown = (e) => {
      if (!modal.open) return;
      if (e.key === 'Enter') {
        e.preventDefault();
        resolveConfirm();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        resolveCancel();
      }
    };

    yesBtn.onclick = resolveConfirm;
    cancelBtn.onclick = resolveCancel;
    modal.oncancel = (e) => {
      e.preventDefault();
      resolveCancel();
    };

    if (!modal.open) modal.showModal();
    yesBtn.focus();
    document.addEventListener('keydown', onKeyDown, true);
  }


  function ensureInfoModal(getTranslation) {
    let modal = document.getElementById('infoModal');
    if (modal) return modal;

    modal = document.createElement('dialog');
    modal.id = 'infoModal';
    modal.className = 'confirm-save-modal';
    modal.innerHTML = `
      <form method="dialog" class="confirm-save-card">
        <h3 data-role="title"></h3>
        <p data-role="message"></p>
        <div class="button-row">
          <button type="button" data-role="ok" class="primary"></button>
        </div>
      </form>`;
    document.body.appendChild(modal);

    const t = getTranslation || ((k) => k);
    modal.querySelector('[data-role="title"]').textContent = t('saveSuccessTitle');
    modal.querySelector('[data-role="message"]').textContent = t('saveSuccessMessage');
    modal.querySelector('[data-role="ok"]').textContent = t('ok');
    return modal;
  }

  function showInfoModal({ getTranslation, titleKey = 'saveSuccessTitle', messageKey = 'saveSuccessMessage', okKey = 'ok', onClose, focusBackTo } = {}) {
    const modal = ensureInfoModal(getTranslation);
    const t = getTranslation || ((k) => k);
    const okBtn = modal.querySelector('[data-role="ok"]');
    modal.querySelector('[data-role="title"]').textContent = t(titleKey);
    modal.querySelector('[data-role="message"]').textContent = t(messageKey);
    okBtn.textContent = t(okKey);

    const cleanup = () => {
      okBtn.onclick = null;
      modal.oncancel = null;
      document.removeEventListener('keydown', onKeyDown, true);
    };

    const resolveClose = () => {
      cleanup();
      modal.close('ok');
      onClose && onClose();
      if (focusBackTo && typeof focusBackTo.focus === 'function') focusBackTo.focus();
    };

    const onKeyDown = (e) => {
      if (!modal.open) return;
      if (e.key === 'Enter' || e.key === 'Escape') {
        e.preventDefault();
        resolveClose();
      }
    };

    okBtn.onclick = resolveClose;
    modal.oncancel = (e) => {
      e.preventDefault();
      resolveClose();
    };

    if (!modal.open) modal.showModal();
    okBtn.focus();
    document.addEventListener('keydown', onKeyDown, true);
  }

  window.RecycleModals = {
    showSaveConfirmModal,
    ensureConfirmModal,
    showInfoModal,
    ensureInfoModal
  };
})();
