import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

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
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, duration, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
