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
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-3">
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setShowCreate(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            + Nouveau compte
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <p className="px-5 py-8 text-slate-400 text-sm text-center">Aucun utilisateur trouvé.</p>
          ) : (
            filtered.map((u) => (
              <div key={u.id} className="px-5 py-3.5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-sm shrink-0">
                  {u.prenom.charAt(0)}{u.nom.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 text-sm">
                    {u.prenom} {u.nom}
                  </p>
                  <p className="text-slate-500 text-xs truncate">{u.email}</p>
                </div>
                <Badge color={ROLE_COLORS[u.role]}>{ROLE_LABELS[u.role]}</Badge>
                {!u.actif && <Badge color="red">Désactivé</Badge>}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => { setResetId(u.id); setNewPassword(""); }}
                    className="text-xs text-slate-500 hover:text-blue-600 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                  >
                    Mot de passe
                  </button>
                  <button
                    onClick={() => handleToggle(u.id, u.actif)}
                    className={`text-xs px-2 py-1 rounded transition-colors ${
                      u.actif
                        ? "text-slate-500 hover:text-red-600 hover:bg-red-50"
                        : "text-slate-500 hover:text-green-600 hover:bg-green-50"
                    }`}
                  >
                    {u.actif ? "Désactiver" : "Activer"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal création */}
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
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <SubmitButton loading={loading}>Créer le compte</SubmitButton>
          </form>
        </Modal>
      )}

      {/* Modal reset password */}
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
