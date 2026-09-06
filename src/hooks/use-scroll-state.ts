import { useSyncExternalStore } from "react";

// Shared, rAF-throttled scroll tracking used by every component that reacts
// to page scroll (Navbar, ScrollProgress, BackToTop, MobileStickyCta).
//
// Before this, each of those four mounted its own `scroll` listener and read
// layout state directly inside the handler — window.scrollY (cheap) three
// times over, plus documentElement.scrollHeight/clientHeight (which forces a
// synchronous layout recalculation) once, all unthrottled so they re-ran on
// every single scroll event. Centralizing to one listener means the forced
// layout read happens at most once per animation frame, shared by whichever
// of the four components are mounted, instead of once per component per
// scroll event.
let scrollY = 0;
let scrollProgress = 0;
let rafId = 0;
const listeners = new Set<() => void>();

function readScrollState() {
  scrollY = window.scrollY;
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  scrollProgress = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0;
  rafId = 0;
  for (const listener of listeners) listener();
}

function onScroll() {
  if (rafId) return;
  rafId = requestAnimationFrame(readScrollState);
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    window.addEventListener("scroll", onScroll, { passive: true });
    // Capture the current position immediately (page can load already
    // scrolled via an anchor link or bfcache restore), matching the
    // synchronous initial read every one of these components used to do.
    readScrollState();
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("scroll", onScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }
  };
}

const getScrollYSnapshot = () => scrollY;
const getScrollProgressSnapshot = () => scrollProgress;
const getServerSnapshot = () => 0;

export function useScrollY() {
  return useSyncExternalStore(subscribe, getScrollYSnapshot, getServerSnapshot);
}

export function useScrollProgress() {
  return useSyncExternalStore(subscribe, getScrollProgressSnapshot, getServerSnapshot);
}
