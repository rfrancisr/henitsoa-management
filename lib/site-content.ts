const STRIPE_COLORS: Record<string, string> = {
  "Résultats": "#FF7043",
  "Équipements": "#4FC3F7",
  "Culture": "#BA68C8",
  "Pédagogie": "#66BB6A",
  "Sport": "#FFD54F",
  "Examens": "#FF7043",
};

const DEFAULT_STRIPE_COLOR = "#90A4AE";

export function formatMoisAnnee(date: Date): string {
  const formatted = date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function getStripeColor(categorie: string): string {
  return STRIPE_COLORS[categorie] ?? DEFAULT_STRIPE_COLOR;
}
