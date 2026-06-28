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
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#f5f5f7" }}>
      <div className="w-full max-w-md">
        <div
          className="bg-white rounded-2xl p-8"
          style={{ boxShadow: "0 1px 40px rgba(0,0,0,0.07), 0 1px 8px rgba(0,0,0,0.04)" }}
        >
          {/* En-tête */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/LogoHenitsoa.png"
                alt=""
                style={{ width: "80px", height: "80px", objectFit: "contain", display: "block" }}
              />
            </div>
            <h1 className="text-xl font-bold tracking-tight" style={{ color: "#1D1D1F" }}>École Privée Henitsoa</h1>
            <p className="text-sm mt-1.5 tracking-wide" style={{ color: "#86868b" }}>
              Connectez-vous à votre espace
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                style={{ color: "#6e6e73" }}
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
                className="w-full px-3.5 py-2.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:border-transparent"
                style={{
                  border: "1px solid rgba(29,29,31,0.12)",
                  background: "#f5f5f7",
                  color: "#1D1D1F",
                  "--tw-ring-color": "#C9A84C",
                } as React.CSSProperties}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                style={{ color: "#6e6e73" }}
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
                className="w-full px-3.5 py-2.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:border-transparent"
                style={{
                  border: "1px solid rgba(29,29,31,0.12)",
                  background: "#f5f5f7",
                  color: "#1D1D1F",
                  "--tw-ring-color": "#C9A84C",
                } as React.CSSProperties}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-gold w-full py-2.5 px-4 rounded-xl text-sm"
            >
              {loading ? "Connexion…" : "Se connecter"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/reset-password"
              className="text-xs transition-colors hover:opacity-70"
              style={{ color: "#86868b" }}
            >
              Mot de passe oublié ?
            </a>
          </div>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#86868b" }}>
          © {new Date().getFullYear()} École Privée Henitsoa — Tous droits réservés
        </p>
      </div>
    </div>
  );
}
