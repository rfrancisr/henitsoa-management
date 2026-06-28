#!/bin/bash
# Script de mise à jour — ecole-henitsoa.com — à lancer depuis /opt/ecole/app sur le serveur
set -e

echo "==> Pull du code..."
git pull origin main

echo "==> Installation des dépendances..."
npm ci --omit=dev

echo "==> Génération du client Prisma..."
npx prisma generate

echo "==> Build Next.js..."
npm run build

echo "==> Migration base de données..."
npx prisma migrate deploy

echo "==> Redémarrage PM2..."
pm2 restart ecole-manager

echo "✓ Déploiement terminé."
