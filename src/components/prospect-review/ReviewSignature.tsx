/** Closing OMSA signature strip for short bilingual prospect pages. */
export function ReviewSignature({
  preparedBy,
  date,
  prospect = "DAH Design",
}: {
  preparedBy: string;
  date: string;
  prospect?: string;
}) {
  return (
    <footer className="bg-[color:var(--ink)] text-white print:hidden">
      <div className="container-luxe flex flex-col gap-4 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">{preparedBy}</p>
          <a
            href="/"
            dir="ltr"
            className="mt-1 inline-block py-2 font-display text-xl font-bold tracking-tight"
          >
            OMSA<span className="text-gradient-gold"> Digital &amp; AI Studio</span>
          </a>
        </div>
        <p className="text-xs text-white/60">
          <bdi>{prospect}</bdi> · {date}
        </p>
      </div>
    </footer>
  );
}
