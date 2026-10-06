import { useEffect, useRef, useState } from "react";

// Same cubic-bezier(0.22, 1, 0.36, 1) curve used by the CSS animations
// elsewhere in the app, evaluated natively (Newton-Raphson) so this
// component doesn't need to pull in Framer Motion just for a number
// count-up — that was the only thing keeping an extra, undeduplicated
// copy of framer-motion/motion-dom in this route's bundle.
function createCubicBezierEasing(x1: number, y1: number, x2: number, y2: number) {
  const a = (v1: number, v2: number) => 1 - 3 * v2 + 3 * v1;
  const b = (v1: number, v2: number) => 3 * v2 - 6 * v1;
  const c = (v1: number) => 3 * v1;

  const bezierX = (t: number) => ((a(x1, x2) * t + b(x1, x2)) * t + c(x1)) * t;
  const bezierY = (t: number) => ((a(y1, y2) * t + b(y1, y2)) * t + c(y1)) * t;
  const derivativeX = (t: number) => (3 * a(x1, x2) * t + 2 * b(x1, x2)) * t + c(x1);

  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = bezierX(t) - x;
      const derivative = derivativeX(t);
      if (Math.abs(derivative) < 1e-6) break;
      t -= dx / derivative;
    }
    return bezierY(t);
  };
}

const easeOut = createCubicBezierEasing(0.22, 1, 0.36, 1);

// Fixed locale so server and client format identically (no hydration mismatch).
const format = (n: number) => Math.round(n).toLocaleString("en-US");

export function Counter({
  to,
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // `null` means "not animating": render the final value as plain text. This
  // is the state on the server and on the client's first render, so the SSR
  // HTML (what crawlers and no-JS visitors see) always contains the real
  // number. The count-up is a client-only enhancement layered on afterwards.
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at hydration: keep the final value rather than
    // visibly snapping it back to 0.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    // Off screen, so resetting to 0 here is invisible to the user.
    setDisplay(format(0));

    let frameId = 0;

    const runCountUp = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / 1000 / duration);
        if (progress < 1) {
          setDisplay(format(easeOut(progress) * to));
          frameId = requestAnimationFrame(tick);
        } else {
          setDisplay(null);
        }
      };
      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          runCountUp();
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      setDisplay(null);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {display === null ? (
        <span>{format(to)}</span>
      ) : (
        <>
          {/* Visual count-up only; assistive tech gets the final value once. */}
          <span aria-hidden="true">{display}</span>
          <span className="sr-only">{format(to)}</span>
        </>
      )}
      {suffix}
    </span>
  );
}
