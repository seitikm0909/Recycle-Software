(function () {
  function defaultDeviceName(type) {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale || 'en-US';
    return `${type}-${locale}`;
  }

  function ensureDeviceIdentity() {
    const key = window.RecycleStorage.KEYS.deviceIdentity;
    const current = window.RecycleStorage.readJson(key, null);
    if (current?.device_id) return current;

    const device_type = window.RecycleUtils.detectDeviceType();
    const created = {
      device_id: window.RecycleUtils.generateId('dev'),
      device_name: defaultDeviceName(device_type),
      device_type,
      created_at: window.RecycleUtils.nowIso(),
      updated_at: window.RecycleUtils.nowIso()
    };
    window.RecycleStorage.writeJson(key, created);
    return created;
  }

  function getCurrentDevice() {
    const existing = ensureDeviceIdentity();
    return {
      device_id: existing.device_id,
      device_name: existing.device_name,
      device_type: window.RecycleUtils.normalizeDeviceType(existing.device_type)
    };
  }

  window.RecycleDevices = {
    ensureDeviceIdentity,
    getCurrentDevice
  };
})();
