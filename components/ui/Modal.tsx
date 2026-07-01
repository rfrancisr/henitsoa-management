"use client";

import { useEffect } from "react";

export default function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(26,26,24,.5)", backdropFilter: "blur(3px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md"
        style={{
          background: "var(--white)",
          border: "1px solid var(--borderLt)",
          borderRadius: "2px 12px 12px 12px",
          boxShadow: "0 1px 4px rgba(26,26,24,.06), 0 8px 40px rgba(26,26,24,.16)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid var(--borderLt)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "18px",
              fontWeight: 400,
              color: "var(--ink)",
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded p-1 transition-colors"
            style={{ color: "var(--inkLt)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              (e.currentTarget as HTMLElement).style.background = "var(--stoneLt)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--inkLt)";
              (e.currentTarget as HTMLElement).style.background = "";
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
