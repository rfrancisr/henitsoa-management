const STRIPE_COLORS: Record<string, string> = {
  "Résultats": "#C43B2C",
  "Équipements": "#3E8FC1",
  "Culture": "#C97A2B",
  "Pédagogie": "#2F5233",
  "Sport": "#F2B705",
  "Examens": "#C43B2C",
};

const DEFAULT_STRIPE_COLOR = "#8A9A88";

export function formatMoisAnnee(date: Date): string {
  const formatted = date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function getStripeColor(categorie: string): string {
  return STRIPE_COLORS[categorie] ?? DEFAULT_STRIPE_COLOR;
}
