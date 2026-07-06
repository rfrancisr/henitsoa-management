import { describe, expect, it } from "vitest";
import { matiereMatchesSearch } from "./repartition-types";

const mat = { matiere: "ARITHMÉTIQUE", topic: "Addition des nombres entiers" };

describe("matiereMatchesSearch", () => {
  it("matches an empty query (no filter applied)", () => {
    expect(matiereMatchesSearch(mat, "9eme", "")).toBe(true);
  });

  it("matches by matiere name, case-insensitively", () => {
    expect(matiereMatchesSearch(mat, "9eme", "arithm")).toBe(true);
  });

  it("matches by topic text", () => {
    expect(matiereMatchesSearch(mat, "9eme", "addition")).toBe(true);
  });

  it("does not match unrelated text", () => {
    expect(matiereMatchesSearch(mat, "9eme", "conjugaison")).toBe(false);
  });

  it("matches a grouped subject via its group label (e.g. Malagasy sub-matières)", () => {
    expect(matiereMatchesSearch({ matiere: "VAKITENY", topic: "Fanoratana" }, "9eme", "malagasy")).toBe(true);
  });

  it("does not treat classes without groups as matching a group label", () => {
    expect(matiereMatchesSearch({ matiere: "LECTURE", topic: "Conte" }, "12eme", "malagasy")).toBe(false);
  });
});
