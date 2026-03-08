(function () {
  function enqueueOperation({ entity, operation, record }) {
    const queueKey = window.RecycleStorage.KEYS.syncQueue;
    const item = {
      queue_id: window.RecycleUtils.generateId('queue'),
      entity,
      operation,
      record_id: record.record_id,
      sync_status: 'pending',
      retry_count: 0,
      retry_after: null,
      conflict_version: record.updated_at,
      enqueued_at: window.RecycleUtils.nowIso(),
      payload: record
    };
    const queue = window.RecycleStorage.readJson(queueKey, []);
    queue.push(item);
    window.RecycleStorage.writeJson(queueKey, queue);
    return item;
  }

  function getSyncSummary() {
    const queue = window.RecycleStorage.readJson(window.RecycleStorage.KEYS.syncQueue, []);
    const counts = queue.reduce((acc, row) => {
      const status = row.sync_status || 'pending';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, { pending: 0, synced: 0, error: 0 });
    const meta = window.RecycleStorage.readJson(window.RecycleStorage.KEYS.syncMeta, {});
    return {
      ...counts,
      total: queue.length,
      last_synced_at: meta.last_synced_at || null
    };
  }

  window.RecycleSync = {
    enqueueOperation,
    getSyncSummary
  };
})();
