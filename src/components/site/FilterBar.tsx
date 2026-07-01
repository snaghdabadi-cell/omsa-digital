type Option = { value: string; label: string };

type FilterGroup = {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
};

export function FilterBar({ groups, onReset }: { groups: FilterGroup[]; onReset?: () => void }) {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-2xl border border-border bg-card p-4">
      {groups.map((g) => (
        <label key={g.id} className="flex flex-col gap-1 text-xs">
          <span className="font-medium uppercase tracking-wider text-muted-foreground">{g.label}</span>
          <select
            value={g.value}
            onChange={(e) => g.onChange(e.target.value)}
            className="rounded-full border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--gold)]"
          >
            <option value="">All</option>
            {g.options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
      ))}
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="ms-auto text-xs font-medium text-muted-foreground hover:text-foreground link-underline"
        >
          Reset filters
        </button>
      )}
    </div>
  );
}
