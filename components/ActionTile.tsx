"use client";

import { useState } from "react";
import Link from "next/link";

export default function ActionTile({
  href,
  icon,
  label,
  sub,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub?: string;
}) {
  const [hov, setHov] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: hov ? "var(--forest)" : "var(--white)",
        border: `1px solid ${hov ? "var(--forest)" : "var(--borderLt)"}`,
        borderLeft: `4px solid ${hov ? "var(--forestLt)" : "var(--stoneDk)"}`,
        borderRadius: "0 10px 10px 0",
        padding: "20px 22px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all .18s",
        boxShadow: hov
          ? "0 4px 20px rgba(28,61,46,.18)"
          : "0 1px 4px rgba(26,26,24,.05)",
      }}
    >
      <span
        style={{
          color: hov ? "var(--stone)" : "var(--inkMd)",
          flexShrink: 0,
          transition: "color .18s",
          display: "flex",
        }}
      >
        {icon}
      </span>
      <span>
        <span
          style={{
            display: "block",
            fontFamily: "'DM Serif Display', serif",
            fontSize: 17,
            fontWeight: 400,
            color: hov ? "var(--stoneLt)" : "var(--ink)",
            transition: "color .18s",
          }}
        >
          {label}
        </span>
        {sub && (
          <span
            style={{
              display: "block",
              fontSize: 12.5,
              fontWeight: 400,
              color: hov ? "rgba(244,240,232,.6)" : "var(--inkLt)",
              marginTop: 2,
            }}
          >
            {sub}
          </span>
        )}
      </span>
    </Link>
  );
}
