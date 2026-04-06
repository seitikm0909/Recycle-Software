(function () {
  const KEYS = {
    transactions: 'recycle_transactions',
    settings: 'recycle_settings',
    fieldMemory: 'recycle_field_memory',
    deviceIdentity: 'recycle_device_identity',
    syncQueue: 'recycle_sync_queue'
  };

  function readJson(key, fallback) {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return window.RecycleUtils.safeJsonParse(raw, fallback);
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  }

  function pushItem(key, item) {
    const arr = Array.isArray(readJson(key, [])) ? readJson(key, []) : [];
    arr.push(item);
    writeJson(key, arr);
    return item;
  }

  window.RecycleStorage = {
    KEYS,
    readJson,
    writeJson,
    pushItem
  };
})();
