#!/bin/bash

# Configuration
BACKUP_DIR="./backups"
PROJECT_DIR="."

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Generate timestamp
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_NAME="backup_${TIMESTAMP}"

# Create backup
echo "Creating backup: $BACKUP_NAME"
cp -r "$PROJECT_DIR" "$BACKUP_DIR/$BACKUP_NAME" 2>/dev/null || {
    # Exclude the backups directory itself
    rsync -a --exclude='backups' --exclude='node_modules' --exclude='.git' "$PROJECT_DIR/" "$BACKUP_DIR/$BACKUP_NAME/"
}

# Compress the backup
echo "Compressing backup..."
tar -czf "$BACKUP_DIR/${BACKUP_NAME}.tar.gz" -C "$BACKUP_DIR" "$BACKUP_NAME"
rm -rf "$BACKUP_DIR/$BACKUP_NAME"

echo "✓ Backup created: ${BACKUP_NAME}.tar.gz"
echo "📍 Location: $BACKUP_DIR/${BACKUP_NAME}.tar.gz"

