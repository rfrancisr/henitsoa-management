/*
  Warnings:

  - You are about to drop the column `periode` on the `RepartitionSemaine` table. All the data in the column will be lost.
  - Added the required column `mois` to the `RepartitionSemaine` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RepartitionSemaine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "classe" TEXT NOT NULL,
    "mois" TEXT NOT NULL,
    "semaine" INTEGER NOT NULL,
    "dateDebut" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "sousTheme" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_RepartitionSemaine" ("classe", "createdAt", "dateDebut", "id", "semaine", "sousTheme", "theme", "updatedAt") SELECT "classe", "createdAt", "dateDebut", "id", "semaine", "sousTheme", "theme", "updatedAt" FROM "RepartitionSemaine";
DROP TABLE "RepartitionSemaine";
ALTER TABLE "new_RepartitionSemaine" RENAME TO "RepartitionSemaine";
CREATE UNIQUE INDEX "RepartitionSemaine_classe_mois_semaine_key" ON "RepartitionSemaine"("classe", "mois", "semaine");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
