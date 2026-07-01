"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email ou mot de passe incorrect.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--stone)" }}
    >
      {/* 3px forest accent line */}
      <div className="top-accent-line" />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Card */}
          <div className="paper-card p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-5 flex items-center justify-center" style={{ width: 72, height: 72 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/LogoHenitsoa.png"
                  alt=""
                  style={{ width: "72px", height: "72px", objectFit: "contain" }}
                />
              </div>
              <p
                className="page-eyebrow mb-2"
              >
                École Privée Henitsoa
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                }}
              >
                Connexion
              </h1>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--inkLt)" }}
              >
                Connectez-vous à votre espace
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    color: "var(--inkLt)",
                  }}
                >
                  Adresse email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@example.com"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    background: "var(--white)",
                    fontSize: "15px",
                    fontFamily: "var(--font-sans)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "2px solid var(--forest)";
                    e.currentTarget.style.outlineOffset = "1px";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = "none";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    color: "var(--inkLt)",
                  }}
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    background: "var(--white)",
                    fontSize: "15px",
                    fontFamily: "var(--font-sans)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "2px solid var(--forest)";
                    e.currentTarget.style.outlineOffset = "1px";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = "none";
                  }}
                />
              </div>

              {error && (
                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: "6px",
                    border: "1px solid rgba(139,42,42,.20)",
                    background: "rgba(139,42,42,.06)",
                    color: "var(--red)",
                    fontSize: "14px",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 px-4"
              >
                {loading ? "Connexion…" : "Se connecter"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="/reset-password"
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: "var(--inkLt)" }}
              >
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <p
            className="text-center text-xs mt-6"
            style={{ color: "var(--inkLt)" }}
          >
            © {new Date().getFullYear()} École Privée Henitsoa — Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
}
