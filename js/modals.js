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
    modal.querySelector('[data-role="title"]').textContent = t('confirm_save');
    modal.querySelector('[data-role="message"]').textContent = t('do_you_want_to_save');
    modal.querySelector('[data-role="yes"]').textContent = t('yes');
    modal.querySelector('[data-role="cancel"]').textContent = t('cancel');
    return modal;
  }

  function showSaveConfirmModal({ getTranslation, onConfirm, onCancel, focusBackTo } = {}) {
    const modal = ensureConfirmModal(getTranslation);
    const t = getTranslation || ((k) => k);
    const yesBtn = modal.querySelector('[data-role="yes"]');
    const cancelBtn = modal.querySelector('[data-role="cancel"]');
    modal.querySelector('[data-role="title"]').textContent = t('confirm_save');
    modal.querySelector('[data-role="message"]').textContent = t('do_you_want_to_save');
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

  window.RecycleModals = {
    showSaveConfirmModal,
    ensureConfirmModal
  };
})();
