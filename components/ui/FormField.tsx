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
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${className}`}
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
      className={`w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white ${className}`}
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
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
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
  color?: "slate" | "green" | "red" | "blue" | "purple" | "orange";
}) {
  const colors = {
    slate: "bg-slate-100 text-slate-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    orange: "bg-orange-100 text-orange-700",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  );
}
