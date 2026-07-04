-- CreateTable
CREATE TABLE "RepartitionMatiereLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "matiereId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "champ" TEXT NOT NULL,
    "ancienneValeur" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RepartitionMatiereLog_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "RepartitionMatiere" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RepartitionMatiereLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
