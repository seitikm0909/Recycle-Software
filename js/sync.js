(function () {
  function mockForwardPending() {
    const key = window.RecycleStorage.KEYS.transactions;
    const rows = window.RecycleStorage.readJson(key, []);
    const now = window.RecycleUtils.nowIso();
    let changed = 0;

    const updated = rows.map((row) => {
      const status = window.RecycleTransactions.normalizeSyncStatus(row.sync_status);
      if (status !== "pending") return row;
      changed += 1;
      return { ...row, sync_status: "synced", last_synced_at: now, updated_at: now, updatedAt: now };
    });

    if (changed) window.RecycleStorage.writeJson(key, updated);
    return { changed, last_synced_at: changed ? now : null };
  }

  function getSyncSummary() {
    const rows = window.RecycleStorage.readJson(window.RecycleStorage.KEYS.transactions, []);
    const summary = rows.reduce((acc, row) => {
      const status = window.RecycleTransactions.normalizeSyncStatus(row.sync_status);
      acc[status] += 1;
      return acc;
    }, { pending: 0, synced: 0, error: 0 });

    const lastSyncedAt = rows
      .map((row) => row.last_synced_at)
      .filter(Boolean)
      .sort()
      .slice(-1)[0] || null;

    return {
      ...summary,
      total: rows.length,
      last_synced_at: lastSyncedAt
    };
  }

  window.RecycleSync = { getSyncSummary, mockForwardPending };
})();
