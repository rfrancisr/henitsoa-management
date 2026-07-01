#!/bin/bash
# Sauvegarde de la base de données SQLite — ecole-henitsoa.com
# Usage : bash backup.sh [raison]
# Ex    : bash backup.sh "avant-migration"
set -e

DB_SOURCE="/opt/ecole/data/prod.db"
BACKUP_DIR="/opt/ecole/backups"
KEEP_DAYS=14
REASON="${1:-auto}"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M")
BACKUP_FILE="$BACKUP_DIR/prod-${TIMESTAMP}-${REASON}.db"

mkdir -p "$BACKUP_DIR"

if command -v sqlite3 &>/dev/null; then
  sqlite3 "$DB_SOURCE" ".backup '$BACKUP_FILE'"
else
  cp "$DB_SOURCE" "$BACKUP_FILE"
fi

echo "✓ Backup : $BACKUP_FILE ($(du -h "$BACKUP_FILE" | cut -f1))"

# Supprimer les backups de plus de KEEP_DAYS jours
find "$BACKUP_DIR" -name "prod-*.db" -mtime +$KEEP_DAYS -delete
REMAINING=$(find "$BACKUP_DIR" -name "prod-*.db" | wc -l)
echo "✓ Backups conservés : $REMAINING (rétention $KEEP_DAYS jours)"
