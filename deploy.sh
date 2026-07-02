#!/bin/bash
# Déploiement — ecole-henitsoa.com
# Lancer depuis /opt/ecole/app sur le serveur
set -e

echo "==> Pull..."
git pull origin master

echo "==> Vérification swap..."
SWAP=$(free -m | awk '/^Swap:/{print $2}')
if [ "$SWAP" -eq 0 ]; then
  echo "ERREUR : swap absent. Créer avec : sudo fallocate -l 1G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile"
  exit 1
fi

echo "==> Arrêt PM2..."
pm2 stop ecole

echo "==> Build..."
rm -rf .next
npm run build

echo "==> Vérification du build..."
if ! ls .next/server/app/\(dashboard\)/ 2>/dev/null | grep -q manifest; then
  echo "ERREUR : build incomplet (manifest manquant) — OOM probable. Relancer le script."
  pm2 start ecole
  exit 1
fi

echo "==> Backup DB (pré-déploiement)..."
bash /opt/ecole/app/backup.sh "pre-deploy"

echo "==> DB..."
npx prisma db push
npx tsx prisma/seed.ts
npx tsx prisma/seed_repartition.mjs --force

echo "==> Redémarrage..."
pm2 start ecole

echo "✓ Déploiement terminé."
