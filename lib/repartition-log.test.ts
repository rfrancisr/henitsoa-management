import { describe, it, expect } from "vitest";
import { diffRepartitionMatiere } from "./repartition-log";

const before = {
  topic: "Les fractions",
  approche: "Manipuler des parts de gâteau",
  transmission: JSON.stringify(["Étape 1", "Étape 2"]),
  exercices: JSON.stringify(["Ex 1", "Ex 2"]),
};

describe("diffRepartitionMatiere", () => {
  it("retourne un tableau vide si aucun champ n'est fourni", () => {
    expect(diffRepartitionMatiere(before, {})).toEqual([]);
  });

  it("retourne un tableau vide si les champs fournis sont identiques à l'existant", () => {
    expect(diffRepartitionMatiere(before, { topic: before.topic })).toEqual([]);
  });

  it("détecte un seul champ modifié et garde l'ancienne valeur", () => {
    expect(diffRepartitionMatiere(before, { topic: "Les décimaux" })).toEqual([
      { champ: "topic", ancienneValeur: "Les fractions" },
    ]);
  });

  it("détecte plusieurs champs modifiés en une seule mise à jour", () => {
    expect(
      diffRepartitionMatiere(before, {
        topic: "Les décimaux",
        approche: "Nouvelle approche",
      })
    ).toEqual([
      { champ: "topic", ancienneValeur: "Les fractions" },
      { champ: "approche", ancienneValeur: "Manipuler des parts de gâteau" },
    ]);
  });

  it("détecte un changement sur transmission/exercices (chaînes JSON sérialisées)", () => {
    const nouvelleTransmission = JSON.stringify(["Étape 1"]);
    expect(
      diffRepartitionMatiere(before, { transmission: nouvelleTransmission })
    ).toEqual([{ champ: "transmission", ancienneValeur: before.transmission }]);
  });
});
