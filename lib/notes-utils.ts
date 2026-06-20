/** Arrondit un nombre à 2 décimales. */
export function arrondi2(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Moyenne pondérée par coefficient, arrondie à 2 décimales.
 * Retourne null si la liste est vide ou si la somme des coefficients est nulle.
 */
export function moyennePonderee(
  notes: { valeur: number; coefficient: number }[]
): number | null {
  if (notes.length === 0) return null;
  const totalPts = notes.reduce((s, n) => s + n.valeur * n.coefficient, 0);
  const totalCoeff = notes.reduce((s, n) => s + n.coefficient, 0);
  return totalCoeff === 0 ? null : arrondi2(totalPts / totalCoeff);
}

/**
 * Moyenne arithmétique simple, arrondie à 2 décimales.
 * Retourne null si la liste est vide.
 */
export function moyenneSimple(valeurs: number[]): number | null {
  if (valeurs.length === 0) return null;
  return arrondi2(valeurs.reduce((s, v) => s + v, 0) / valeurs.length);
}
