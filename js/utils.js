(function () {
  const DEVICE_TYPES = ['mobile', 'tablet', 'desktop'];

  function nowIso() {
    return new Date().toISOString();
  }

  function generateId(prefix = 'rec') {
    if (crypto.randomUUID) return `${prefix}_${crypto.randomUUID()}`;
    return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  }

  function safeJsonParse(raw, fallback) {
    try {
      return JSON.parse(raw);
    } catch (_err) {
      return fallback;
    }
  }

  function detectDeviceType() {
    const ua = navigator.userAgent || '';
    const coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const mobileUA = /Android|iPhone|iPod|IEMobile|BlackBerry|Opera Mini/i.test(ua);
    const tabletUA = /iPad|Tablet|PlayBook|Silk/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (tabletUA) return 'tablet';
    if (mobileUA || coarsePointer) return 'mobile';
    return 'desktop';
  }

  function normalizeDeviceType(value) {
    return DEVICE_TYPES.includes(value) ? value : detectDeviceType();
  }

  window.RecycleUtils = {
    nowIso,
    generateId,
    safeJsonParse,
    detectDeviceType,
    normalizeDeviceType
  };
})();
