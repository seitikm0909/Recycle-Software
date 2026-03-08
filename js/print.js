(function () {
  function openPrintWindowWithContent(html, title) {
    const content = String(html || '').trim();
    if (!content) return false;
    const win = window.open('', '_blank');
    if (!win) return false;
    const fullHtml = `<!doctype html><html><head><meta charset="utf-8"/><title>${title || ''}</title><style>body{font-family:Arial,sans-serif;padding:12px}table{width:100%;border-collapse:collapse;margin-bottom:10px}th,td{border:1px solid #333;padding:4px;font-size:10px;vertical-align:top}h2,h3{margin:.4rem 0}.copy{border:0;padding:0}.tx-block{border:1px solid #444;padding:8px;margin-bottom:8px}</style></head><body>${content}</body></html>`;
    win.document.open();
    win.document.write(fullHtml);
    win.document.close();
    const triggerPrint = () => win.setTimeout(() => win.print(), 250);
    if (win.document.readyState === 'complete') triggerPrint();
    else win.addEventListener('load', triggerPrint, { once: true });
    return true;
  }

  window.RecyclePrint = { openPrintWindowWithContent };
})();
