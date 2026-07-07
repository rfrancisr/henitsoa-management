import { describe, expect, it } from "vitest";
import { formatMoisAnnee, getStripeColor } from "./site-content";

describe("formatMoisAnnee", () => {
  it("formats a June 2026 date as 'Juin 2026'", () => {
    expect(formatMoisAnnee(new Date(2026, 5, 15))).toBe("Juin 2026");
  });

  it("formats a January date with capitalized month", () => {
    expect(formatMoisAnnee(new Date(2025, 0, 1))).toBe("Janvier 2025");
  });
});

describe("getStripeColor", () => {
  it("returns the known color for an existing category", () => {
    expect(getStripeColor("Résultats")).toBe("#C43B2C");
    expect(getStripeColor("Sport")).toBe("#F2B705");
  });

  it("returns the default color for an unknown category", () => {
    expect(getStripeColor("Catégorie inconnue")).toBe("#8A9A88");
  });
});
