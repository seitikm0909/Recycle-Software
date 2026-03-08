(function () {
  function buildRecordMetadata({ existingRecord, device, user }) {
    const now = window.RecycleUtils.nowIso();
    return {
      record_id: existingRecord?.record_id || window.RecycleUtils.generateId('record'),
      created_at: existingRecord?.created_at || now,
      updated_at: now,
      created_by_device_id: existingRecord?.created_by_device_id || device.device_id,
      created_by_device_name: existingRecord?.created_by_device_name || device.device_name,
      created_by_device_type: existingRecord?.created_by_device_type || device.device_type,
      created_by_user_id: existingRecord?.created_by_user_id || user.user_id,
      created_by_user_name: existingRecord?.created_by_user_name || user.user_name,
      updated_by_device_id: device.device_id,
      updated_by_user_id: user.user_id,
      sync_status: existingRecord?.sync_status || 'pending',
      last_synced_at: existingRecord?.last_synced_at || null
    };
  }

  function appendAuditLog(action, entity, payload, ctx) {
    const logItem = {
      audit_id: window.RecycleUtils.generateId('audit'),
      action,
      entity,
      entity_record_id: payload.record_id,
      at: window.RecycleUtils.nowIso(),
      by_device_id: ctx.device.device_id,
      by_user_id: ctx.user.user_id,
      changes: payload
    };
    window.RecycleStorage.pushItem(window.RecycleStorage.KEYS.auditLog, logItem);
  }

  window.RecycleAudit = {
    buildRecordMetadata,
    appendAuditLog
  };
})();
