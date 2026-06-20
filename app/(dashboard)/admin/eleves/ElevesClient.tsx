"use client";

import { useState } from "react";
import { createEleve, updateEleve, linkParent, unlinkParent, affecterEleveClasse } from "@/lib/actions/eleves";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton, Badge } from "@/components/ui/FormField";
import type { Sexe } from "@/app/generated/prisma/enums";

type Parent = { id: string; nom: string; prenom: string; email: string };
type Classe = { id: string; libelle: string; niveau: { libelle: string } };
type Eleve = {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  sexe: Sexe;
  adresse: string;
  actif: boolean;
  parents: { user: Parent }[];
  classes: { classe: Classe; anneeScolaire: { libelle: string } }[];
};

export default function ElevesClient({
  eleves,
  parents,
  classes,
  anneeScolaireId,
}: {
  eleves: Eleve[];
  parents: Parent[];
  classes: Classe[];
  anneeScolaireId: string | null;
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [editEleve, setEditEleve] = useState<Eleve | null>(null);
  const [affectEleve, setAffectEleve] = useState<Eleve | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const filtered = eleves.filter(
    (e) =>
      e.nom.toLowerCase().includes(search.toLowerCase()) ||
      e.prenom.toLowerCase().includes(search.toLowerCase())
  );

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await createEleve({
      nom: fd.get("nom") as string,
      prenom: fd.get("prenom") as string,
      dateNaissance: fd.get("dateNaissance") as string,
      sexe: fd.get("sexe") as Sexe,
      adresse: fd.get("adresse") as string,
    });
    setLoading(false);
    setShowCreate(false);
  }

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editEleve) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await updateEleve(editEleve.id, {
      nom: fd.get("nom") as string,
      prenom: fd.get("prenom") as string,
      dateNaissance: fd.get("dateNaissance") as string,
      sexe: fd.get("sexe") as Sexe,
      adresse: fd.get("adresse") as string,
    });
    setLoading(false);
    setEditEleve(null);
  }

  async function handleAffect(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!affectEleve || !anneeScolaireId) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const classeId = fd.get("classeId") as string;
    const parentId = fd.get("parentId") as string;

    if (classeId) await affecterEleveClasse(affectEleve.id, classeId, anneeScolaireId);
    if (parentId) await linkParent(affectEleve.id, parentId);
    setLoading(false);
    setAffectEleve(null);
  }

  function EleveForm({ eleve }: { eleve?: Eleve }) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Prénom">
            <Input name="prenom" required defaultValue={eleve?.prenom} placeholder="Marie" />
          </FormField>
          <FormField label="Nom">
            <Input name="nom" required defaultValue={eleve?.nom} placeholder="RAKOTO" />
          </FormField>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Date de naissance">
            <Input
              name="dateNaissance"
              type="date"
              required
              defaultValue={eleve ? new Date(eleve.dateNaissance).toISOString().slice(0, 10) : ""}
            />
          </FormField>
          <FormField label="Sexe">
            <Select name="sexe" required defaultValue={eleve?.sexe}>
              <option value="FEMININ">Féminin</option>
              <option value="MASCULIN">Masculin</option>
            </Select>
          </FormField>
        </div>
        <FormField label="Adresse">
          <Input name="adresse" required defaultValue={eleve?.adresse} placeholder="Lot IV A 12, Antananarivo" />
        </FormField>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}>
        <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-3">
          <input
            type="text"
            placeholder="Rechercher un élève..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-stone-50 text-stone-900 placeholder-stone-300"
          />
          <button
            onClick={() => setShowCreate(true)}
            className="btn-gold text-sm px-4 py-2 rounded-xl whitespace-nowrap"
          >
            + Nouvel élève
          </button>
        </div>

        <div className="divide-y divide-stone-50">
          {filtered.length === 0 ? (
            <p className="px-5 py-8 text-stone-300 text-sm text-center">Aucun élève trouvé.</p>
          ) : (
            filtered.map((eleve) => {
              const derniereClasse = eleve.classes[0];
              return (
                <div key={eleve.id} className="px-5 py-3.5 flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm shrink-0"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#9A7428" }}
                  >
                    {eleve.prenom.charAt(0)}{eleve.nom.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-stone-900 text-sm">
                      {eleve.prenom} {eleve.nom}
                    </p>
                    <p className="text-stone-400 text-xs">
                      {derniereClasse
                        ? `${derniereClasse.classe.libelle} — ${derniereClasse.anneeScolaire.libelle}`
                        : "Classe non assignée"}
                      {eleve.parents.length > 0 && ` · Parent: ${eleve.parents[0].user.prenom} ${eleve.parents[0].user.nom}`}
                    </p>
                  </div>
                  {eleve.sexe === "FEMININ" ? (
                    <Badge color="slate">F</Badge>
                  ) : (
                    <Badge color="slate">M</Badge>
                  )}
                  {!eleve.actif && <Badge color="red">Archivé</Badge>}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setEditEleve(eleve)}
                      className="btn-glass text-xs px-2 py-1 rounded-lg font-medium"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => setAffectEleve(eleve)}
                      className="btn-glass text-xs px-2 py-1 rounded-lg font-medium"
                    >
                      Affecter
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {showCreate && (
        <Modal title="Nouvel élève" onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <EleveForm />
            <SubmitButton loading={loading}>Enregistrer</SubmitButton>
          </form>
        </Modal>
      )}

      {editEleve && (
        <Modal title={`Modifier — ${editEleve.prenom} ${editEleve.nom}`} onClose={() => setEditEleve(null)}>
          <form onSubmit={handleUpdate} className="space-y-4">
            <EleveForm eleve={editEleve} />
            <SubmitButton loading={loading}>Mettre à jour</SubmitButton>
          </form>
        </Modal>
      )}

      {affectEleve && (
        <Modal title={`Affecter — ${affectEleve.prenom} ${affectEleve.nom}`} onClose={() => setAffectEleve(null)}>
          <form onSubmit={handleAffect} className="space-y-4">
            {anneeScolaireId ? (
              <FormField label="Classe (année scolaire active)">
                <Select name="classeId" defaultValue="">
                  <option value="">-- Choisir une classe --</option>
                  {classes.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.libelle} ({c.niveau.libelle})
                    </option>
                  ))}
                </Select>
              </FormField>
            ) : (
              <p className="text-amber-600 text-sm">Aucune année scolaire active. Contactez l&apos;administrateur.</p>
            )}
            <FormField label="Lier un parent">
              <Select name="parentId" defaultValue="">
                <option value="">-- Choisir un parent --</option>
                {parents
                  .filter((p) => !affectEleve.parents.some((ep) => ep.user.id === p.id))
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.prenom} {p.nom} ({p.email})
                    </option>
                  ))}
              </Select>
            </FormField>
            {affectEleve.parents.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Parents liés</p>
                <div className="space-y-1">
                  {affectEleve.parents.map(({ user: p }) => (
                    <div key={p.id} className="flex items-center justify-between text-sm bg-stone-50 px-3 py-2 rounded-xl">
                      <span>{p.prenom} {p.nom}</span>
                      <button
                        type="button"
                        onClick={() => unlinkParent(affectEleve.id, p.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        Retirer
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <SubmitButton loading={loading}>Enregistrer</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
}
