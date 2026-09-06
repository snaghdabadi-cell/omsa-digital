import { useScrollProgress } from "@/hooks/use-scroll-state";

export function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full origin-left bg-[color:var(--gold)] transition-[width] duration-150"
        style={{ width: `${p * 100}%` }}
      />
    </div>
  );
}
