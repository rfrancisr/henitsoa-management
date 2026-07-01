"use client";

import { useState } from "react";
import { createUser, toggleUserActif, resetUserPassword } from "@/lib/actions/users";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton, Badge } from "@/components/ui/FormField";
import type { Role } from "@/app/generated/prisma/enums";

const ROLE_LABELS: Record<Role, string> = {
  ADMIN: "Administrateur",
  DIRECTEUR: "Directeur",
  ENSEIGNANT: "Enseignant",
  PARENT: "Parent",
};

const ROLE_COLORS: Record<Role, "purple" | "blue" | "green" | "orange"> = {
  ADMIN: "purple",
  DIRECTEUR: "blue",
  ENSEIGNANT: "green",
  PARENT: "orange",
};

type User = {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  role: Role;
  actif: boolean;
};

export default function UtilisateursClient({ utilisateurs }: { utilisateurs: User[] }) {
  const [showCreate, setShowCreate] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetId, setResetId] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");

  const filtered = utilisateurs.filter(
    (u) =>
      u.nom.toLowerCase().includes(search.toLowerCase()) ||
      u.prenom.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const result = await createUser({
      email: fd.get("email") as string,
      password: fd.get("password") as string,
      role: fd.get("role") as Role,
      nom: fd.get("nom") as string,
      prenom: fd.get("prenom") as string,
    });
    setLoading(false);
    if (result.error) { setError(result.error); return; }
    setShowCreate(false);
  }

  async function handleToggle(id: string, actif: boolean) {
    await toggleUserActif(id, !actif);
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    if (!resetId) return;
    setLoading(true);
    await resetUserPassword(resetId, newPassword);
    setLoading(false);
    setResetId(null);
    setNewPassword("");
  }

  return (
    <>
      <div className="paper-card overflow-hidden">
        <div
          className="px-5 py-4 flex items-center gap-3"
          style={{ borderBottom: "1px solid var(--borderLt)" }}
        >
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
            style={{
              padding: "9px 12px",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "var(--font-sans)",
              background: "var(--white)",
              color: "var(--ink)",
              outline: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "2px solid var(--forest)";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
          />
          <button
            onClick={() => setShowCreate(true)}
            className="btn-primary text-sm px-4 py-2 whitespace-nowrap"
          >
            + Nouveau compte
          </button>
        </div>

        <div>
          {filtered.length === 0 ? (
            <p className="px-5 py-8 text-sm text-center" style={{ color: "var(--inkLt)" }}>
              Aucun utilisateur trouvé.
            </p>
          ) : (
            filtered.map((u) => (
              <div
                key={u.id}
                className="px-5 py-3.5 flex items-center gap-4"
                style={{ borderBottom: "1px solid var(--borderLt)" }}
              >
                <div className="avatar avatar-forest w-9 h-9 shrink-0" style={{ fontSize: "13px" }}>
                  {u.prenom.charAt(0)}{u.nom.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>
                    {u.prenom} {u.nom}
                  </p>
                  <p style={{ fontSize: 12.5, color: "var(--inkLt)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{u.email}</p>
                </div>
                <Badge color={ROLE_COLORS[u.role]}>{ROLE_LABELS[u.role]}</Badge>
                {!u.actif && <Badge color="red">Désactivé</Badge>}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => { setResetId(u.id); setNewPassword(""); }}
                    className="btn-secondary text-sm px-3 py-2"
                  >
                    Mot de passe
                  </button>
                  <button
                    onClick={() => handleToggle(u.id, u.actif)}
                    className="text-sm px-3 py-2 rounded transition-colors"
                    style={{ color: "var(--inkLt)" }}
                    onMouseEnter={(e) => {
                      const c = u.actif ? "var(--red)" : "var(--green)";
                      (e.currentTarget as HTMLElement).style.color = c;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--inkLt)";
                    }}
                  >
                    {u.actif ? "Désactiver" : "Activer"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showCreate && (
        <Modal title="Nouveau compte" onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Prénom">
                <Input name="prenom" required placeholder="Jean" />
              </FormField>
              <FormField label="Nom">
                <Input name="nom" required placeholder="DUPONT" />
              </FormField>
            </div>
            <FormField label="Email">
              <Input name="email" type="email" required placeholder="jean.dupont@ecole.mg" />
            </FormField>
            <FormField label="Mot de passe initial">
              <Input name="password" type="password" required minLength={8} placeholder="Min. 8 caractères" />
            </FormField>
            <FormField label="Rôle">
              <Select name="role" required>
                <option value="ENSEIGNANT">Enseignant</option>
                <option value="PARENT">Parent</option>
                <option value="DIRECTEUR">Directeur</option>
                <option value="ADMIN">Administrateur</option>
              </Select>
            </FormField>
            {error && (
              <p
                className="text-sm rounded px-3 py-2"
                style={{
                  color: "var(--red)",
                  background: "rgba(139,42,42,.08)",
                  border: "1px solid rgba(139,42,42,.2)",
                }}
              >
                {error}
              </p>
            )}
            <SubmitButton loading={loading}>Créer le compte</SubmitButton>
          </form>
        </Modal>
      )}

      {resetId && (
        <Modal title="Réinitialiser le mot de passe" onClose={() => setResetId(null)}>
          <form onSubmit={handleReset} className="space-y-4">
            <FormField label="Nouveau mot de passe">
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                placeholder="Min. 8 caractères"
              />
            </FormField>
            <SubmitButton loading={loading}>Mettre à jour</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
}
