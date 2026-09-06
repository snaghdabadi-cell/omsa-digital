import { ArrowUp } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-state";

export function BackToTop() {
  const show = useScrollY() > 600;
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-luxe hover:scale-110 transition-transform"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
