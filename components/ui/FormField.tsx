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
      <label
        className="block mb-1.5"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.6px",
          textTransform: "uppercase",
          color: "var(--inkLt)",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          className="mt-2 text-sm rounded px-3 py-2"
          style={{
            color: "var(--red)",
            background: "rgba(139,42,42,.08)",
            border: "1px solid rgba(139,42,42,.2)",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid var(--border)",
  borderRadius: "6px",
  background: "var(--white)",
  fontSize: "15px",
  fontFamily: "var(--font-sans)",
  color: "var(--ink)",
  outline: "none",
  transition: "outline-color 0.1s ease",
  appearance: "auto",
};

export function Input({
  style,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      style={{ ...inputBase, ...style }}
      onFocus={(e) => {
        (e.currentTarget as HTMLElement).style.outline = "2px solid var(--forest)";
        (e.currentTarget as HTMLElement).style.outlineOffset = "1px";
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLElement).style.outline = "none";
      }}
      {...props}
    />
  );
}

export function Select({
  style,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      style={{ ...inputBase, ...style }}
      onFocus={(e) => {
        (e.currentTarget as HTMLElement).style.outline = "2px solid var(--forest)";
        (e.currentTarget as HTMLElement).style.outlineOffset = "1px";
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLElement).style.outline = "none";
      }}
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
      className="btn-primary w-full py-3 px-4"
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
  const styles: Record<string, React.CSSProperties> = {
    slate: {
      background: "rgba(122,117,108,.10)",
      color: "var(--inkMd)",
    },
    green: {
      background: "rgba(28,77,48,.10)",
      color: "var(--green)",
      border: "1px solid rgba(28,77,48,.18)",
    },
    red: {
      background: "rgba(139,42,42,.10)",
      color: "var(--red)",
      border: "1px solid rgba(139,42,42,.18)",
    },
    blue: {
      background: "rgba(28,61,46,.10)",
      color: "var(--forest)",
      border: "1px solid rgba(28,61,46,.18)",
    },
    purple: {
      background: "rgba(28,61,46,.10)",
      color: "var(--forest)",
      border: "1px solid rgba(28,61,46,.18)",
    },
    orange: {
      background: "rgba(122,92,0,.10)",
      color: "var(--amber)",
      border: "1px solid rgba(122,92,0,.18)",
    },
    gold: {
      background: "rgba(28,61,46,.10)",
      color: "var(--forest)",
      border: "1px solid rgba(28,61,46,.18)",
    },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "11.5px",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        letterSpacing: "0.3px",
        ...styles[color],
      }}
    >
      {children}
    </span>
  );
}
