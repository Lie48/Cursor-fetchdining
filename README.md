# Cursor-fetchdining

Cursor version 1.6 of fetch dining

## Backup System

This project includes a backup system that creates timestamped full copies of your code.

### Features

- ✅ Automatic timestamped backups (YYYY-MM-DD_HH-MM-SS format)
- ✅ Compressed backups to save space
- ✅ Easy backup selection by date/time
- ✅ Safe restore with confirmation prompt

### Usage

#### Create a Backup
```bash
./backup.sh
```

This will create a compressed backup in the `backups/` directory with the current timestamp.

#### List All Backups
```bash
./list-backups.sh
```

Shows all available backups with their dates, times, and sizes.

#### Restore a Backup
```bash
./restore-backup.sh
```

1. View the numbered list of backups
2. Enter the number of the backup you want to restore
3. Confirm the restore operation

#### Quick View Backups
```bash
ls -lh backups/*.tar.gz
```

### Backup Naming

Backups are named using the format: `backup_YYYY-MM-DD_HH-MM-SS.tar.gz`

Example: `backup_2024-01-15_14-30-45.tar.gz`

### Notes

- Backups are automatically compressed to save disk space
- The `backups/` directory is excluded from version control
- Always verify your backup was created successfully before making major changes

