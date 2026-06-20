-- CreateTable
CREATE TABLE "ProfilEnseignant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "dateNaissance" DATETIME,
    "lieuNaissance" TEXT,
    "sexe" TEXT,
    "photo" TEXT,
    "telephone" TEXT,
    "adresse" TEXT,
    "dateEmbauche" DATETIME NOT NULL,
    "typeContrat" TEXT NOT NULL,
    "diplome" TEXT,
    "specialite" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'ACTIF',
    "salaireBase" REAL,
    "numeroCNAPS" TEXT,
    "numeroCompte" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProfilEnseignant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfilEnseignant_userId_key" ON "ProfilEnseignant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilEnseignant_matricule_key" ON "ProfilEnseignant"("matricule");
