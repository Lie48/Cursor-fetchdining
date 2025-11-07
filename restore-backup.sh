#!/bin/bash

BACKUP_DIR="./backups"

# Show available backups
echo "Available backups:"
echo "=================="
ls -1 "$BACKUP_DIR"/*.tar.gz 2>/dev/null | nl

# Ask user to select
echo ""
read -p "Enter backup number to restore: " choice

# Get the selected backup file
BACKUP_FILE=$(ls -1 "$BACKUP_DIR"/*.tar.gz 2>/dev/null | sed -n "${choice}p")

if [ -z "$BACKUP_FILE" ]; then
    echo "❌ Invalid selection"
    exit 1
fi

echo "Restoring: $BACKUP_FILE"
echo "⚠️  WARNING: This will overwrite current files!"
read -p "Continue? (y/N): " confirm

if [ "$confirm" != "y" ]; then
    echo "Cancelled."
    exit 0
fi

# Extract backup
BACKUP_NAME=$(basename "$BACKUP_FILE" .tar.gz)
tar -xzf "$BACKUP_FILE" -C "$BACKUP_DIR"

# Copy files back
cp -r "$BACKUP_DIR/$BACKUP_NAME/"* . 2>/dev/null || rsync -a "$BACKUP_DIR/$BACKUP_NAME/" ./

# Clean up extracted folder
rm -rf "$BACKUP_DIR/$BACKUP_NAME"

echo "✓ Restore complete!"

