import Link from "next/link";

export default function BackLink({
  href = "/admin",
  label = "Retour à l'accueil",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link href={href} className="back-link">
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      {label}
    </Link>
  );
}
