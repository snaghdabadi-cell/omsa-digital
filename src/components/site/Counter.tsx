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
  // Matches the previous implementation's initial state: always render 0
  // (formatted) until the viewport trigger fires, both on the server and
  // on the client's first paint, so there is no hydration mismatch.
  const [display, setDisplay] = useState(() => Math.round(0).toLocaleString());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frameId = 0;

    const runCountUp = () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        setDisplay(Math.round(to).toLocaleString());
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / 1000 / duration);
        setDisplay(Math.round(easeOut(progress) * to).toLocaleString());
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
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
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span>{display}</span>
      {suffix}
    </span>
  );
}
