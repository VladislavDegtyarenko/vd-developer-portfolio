import { isBrowser } from "@/utils/isBrowser";

// scroll-store.ts
type Snapshot = {
  scrollY: number;
  scrolledUp: boolean;
  scrolledDown: boolean;
};

const listeners = new Set<() => void>();

// scalar state
let ticking = false;
let lastY = 0;
let scrollY = 0;

// derived
let scrolledUp = false;
let scrolledDown = false;

// config
let thresholdPx = 0;
let throttleMs = 500;
let throttleLeading = true;
let throttleTrailing = false;

// throttle internals
let lastEmitTs = 0; // performance.now of last notify
let trailingTimer: number | null = null;
let pending: Snapshot | null = null;

// cached snapshot object
let snapshot: Snapshot = { scrollY: 0, scrolledUp: false, scrolledDown: false };
const SERVER_SNAPSHOT: Snapshot = snapshot;

const getWindowY = () =>
  isBrowser() ? Math.round(window.scrollY || window.pageYOffset || 0) : 0;

const commit = (next: Snapshot) => {
  snapshot = next;
  // console.log("scrollY updated (throttled):", next.scrollY);
  for (const l of Array.from(listeners)) l();
};

const clearTrailingTimer = () => {
  if (trailingTimer != null) {
    clearTimeout(trailingTimer);
    trailingTimer = null;
  }
};

const tryEmit = (now: number) => {
  if (!pending) return;

  if (throttleMs <= 0) {
    // no throttling
    commit(pending);
    pending = null;
    return;
  }

  const since = now - lastEmitTs;

  if (since >= throttleMs) {
    // leading edge allowed
    if (throttleLeading || lastEmitTs !== 0) {
      commit(pending);
      pending = null;
      lastEmitTs = now;
      clearTrailingTimer();
      return;
    }
  }

  // cannot emit now - schedule trailing if enabled
  if (throttleTrailing && trailingTimer == null) {
    const wait = Math.max(0, throttleMs - since);
    trailingTimer = window.setTimeout(() => {
      trailingTimer = null;
      if (!pending) return;
      commit(pending);
      pending = null;
      lastEmitTs = performance.now();
    }, wait);
  }
};

const onScrollRaf = () => {
  ticking = false;

  const nextY = getWindowY();
  const delta = nextY - scrollY;

  // respect pixel threshold before computing direction
  if (Math.abs(delta) < thresholdPx) return;

  const nextScrolledUp = nextY < scrollY;
  const nextScrolledDown = nextY > scrollY;

  lastY = scrollY;
  scrollY = nextY;

  // only enqueue if something changed vs current snapshot
  if (
    snapshot.scrollY !== scrollY ||
    snapshot.scrolledUp !== nextScrolledUp ||
    snapshot.scrolledDown !== nextScrolledDown
  ) {
    scrolledUp = nextScrolledUp;
    scrolledDown = nextScrolledDown;

    // stage a pending snapshot and let throttler decide when to commit
    pending = { scrollY, scrolledUp, scrolledDown };
    tryEmit(performance.now());
  }
};

const onScroll = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(onScrollRaf);
  }
};

export function subscribe(listener: () => void) {
  if (typeof window !== "undefined" && listeners.size === 0) {
    // init state on first subscriber
    scrollY = getWindowY();
    lastY = scrollY;
    scrolledUp = false;
    scrolledDown = false;
    snapshot = { scrollY, scrolledUp, scrolledDown };
    lastEmitTs = 0;
    clearTrailingTimer();
    pending = null;

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  listeners.add(listener);

  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined" && listeners.size === 0) {
      window.removeEventListener("scroll", onScroll);
      clearTrailingTimer();
      pending = null;
      ticking = false;
    }
  };
}

export function setThreshold(px: number) {
  thresholdPx = Math.max(0, px | 0);
}

export function setThrottle(options: {
  ms?: number;
  leading?: boolean;
  trailing?: boolean;
}) {
  const {
    ms = throttleMs,
    leading = throttleLeading,
    trailing = throttleTrailing,
  } = options;
  throttleMs = Math.max(0, ms | 0);
  throttleLeading = !!leading;
  throttleTrailing = !!trailing;

  // reset timers when config changes
  clearTrailingTimer();
  pending = null;
  lastEmitTs = 0;
}

export function getSnapshot(): Snapshot {
  return snapshot;
}

export function getServerSnapshot(): Snapshot {
  return SERVER_SNAPSHOT;
}
