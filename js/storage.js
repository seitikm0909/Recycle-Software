(function () {
  const KEYS = {
    transactions: 'recycle_transactions',
    settings: 'recycle_settings',
    fieldMemory: 'recycle_field_memory',
    deviceIdentity: 'recycle_device_identity',
    users: 'recycle_users',
    currentUser: 'recycle_current_user',
    syncQueue: 'recycle_sync_queue',
    syncMeta: 'recycle_sync_meta',
    clients: 'recycle_clients',
    inventoryMovements: 'recycle_inventory_movements',
    kobutsuHistory: 'recycle_kobutsu_history',
    auditLog: 'recycle_audit_log'
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
