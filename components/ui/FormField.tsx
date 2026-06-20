export function FormField({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-stone-500 mb-1.5 uppercase tracking-wider">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-3.5 py-2.5 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm bg-stone-50 transition-all ${className}`}
      {...props}
    />
  );
}

export function Select({
  className = "",
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`w-full px-3.5 py-2.5 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm bg-stone-50 transition-all ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SubmitButton({
  children,
  loading = false,
}: {
  children: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="btn-gold w-full py-2.5 px-4 rounded-xl text-sm"
    >
      {loading ? "Chargement…" : children}
    </button>
  );
}

export function Badge({
  children,
  color = "slate",
}: {
  children: React.ReactNode;
  color?: "slate" | "green" | "red" | "blue" | "purple" | "orange" | "gold";
}) {
  const colors: Record<string, string> = {
    slate:  "bg-stone-100 text-stone-600",
    green:  "bg-emerald-50 text-emerald-700 border border-emerald-100",
    red:    "bg-red-50 text-red-600 border border-red-100",
    blue:   "bg-stone-100 text-stone-700",
    purple: "bg-stone-100 text-stone-700",
    orange: "bg-stone-100 text-stone-700",
    gold:   "border text-[#9A7428]",
  };

  const goldStyle =
    color === "gold"
      ? { background: "rgba(201,168,76,0.10)", borderColor: "rgba(201,168,76,0.30)" }
      : undefined;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colors[color] ?? colors.slate}`}
      style={goldStyle}
    >
      {children}
    </span>
  );
}
