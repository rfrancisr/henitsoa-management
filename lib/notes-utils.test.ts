import { describe, it, expect } from "vitest";
import { moyennePonderee, moyenneSimple, arrondi2 } from "./notes-utils";

describe("arrondi2", () => {
  it("arrondit à 2 décimales", () => {
    expect(arrondi2(14.005)).toBe(14.01);
    expect(arrondi2(13.333333)).toBe(13.33);
    expect(arrondi2(15)).toBe(15);
  });
});

describe("moyennePonderee", () => {
  it("retourne null pour une liste vide", () => {
    expect(moyennePonderee([])).toBeNull();
  });

  it("retourne null si la somme des coefficients est nulle", () => {
    expect(moyennePonderee([{ valeur: 12, coefficient: 0 }])).toBeNull();
  });

  it("calcule la moyenne pondérée arrondie à 2 décimales", () => {
    // (14*4 + 8*2) / (4+2) = 72/6 = 12
    expect(
      moyennePonderee([
        { valeur: 14, coefficient: 4 },
        { valeur: 8, coefficient: 2 },
      ])
    ).toBe(12);
  });

  it("pondère réellement par les coefficients", () => {
    // (10*1 + 20*3) / 4 = 70/4 = 17.5
    expect(
      moyennePonderee([
        { valeur: 10, coefficient: 1 },
        { valeur: 20, coefficient: 3 },
      ])
    ).toBe(17.5);
  });

  it("arrondit à 2 décimales", () => {
    // (13 + 14 + 15) / 3 = 14 ; (10+11)/2 ... tester un cas non-rond
    // (15*4 + 14*5) / 9 = (60+70)/9 = 130/9 = 14.444... -> 14.44
    expect(
      moyennePonderee([
        { valeur: 15, coefficient: 4 },
        { valeur: 14, coefficient: 5 },
      ])
    ).toBe(14.44);
  });
});

describe("moyenneSimple", () => {
  it("retourne null pour une liste vide", () => {
    expect(moyenneSimple([])).toBeNull();
  });

  it("calcule la moyenne arithmétique arrondie à 2 décimales", () => {
    expect(moyenneSimple([10, 20])).toBe(15);
    expect(moyenneSimple([13, 14, 15])).toBe(14);
    // (12 + 13 + 14) / 3 = 13 ; tester non-rond : (10+11+13)/3 = 11.333 -> 11.33
    expect(moyenneSimple([10, 11, 13])).toBe(11.33);
  });
});
