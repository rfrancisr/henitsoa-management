-- CreateTable
CREATE TABLE "RepartitionSemaine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "classe" TEXT NOT NULL,
    "periode" INTEGER NOT NULL,
    "semaine" INTEGER NOT NULL,
    "dateDebut" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "sousTheme" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "RepartitionMatiere" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "semaineId" TEXT NOT NULL,
    "matiere" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "approche" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "exercices" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RepartitionMatiere_semaineId_fkey" FOREIGN KEY ("semaineId") REFERENCES "RepartitionSemaine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RepartitionSemaine_classe_periode_semaine_key" ON "RepartitionSemaine"("classe", "periode", "semaine");

-- CreateIndex
CREATE UNIQUE INDEX "RepartitionMatiere_semaineId_matiere_key" ON "RepartitionMatiere"("semaineId", "matiere");
