#!/bin/bash

BACKUP_DIR="./backups"

echo "Available backups:"
echo "=================="
ls -lh "$BACKUP_DIR"/*.tar.gz 2>/dev/null | awk '{print $9, "\tSize:", $5, "\tDate:", $6, $7, $8}' | \
    sed 's|.*/backup_||' | sed 's|\.tar\.gz||'

echo ""
echo "Count: $(ls -1 "$BACKUP_DIR"/*.tar.gz 2>/dev/null | wc -l)"

