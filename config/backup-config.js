// backup-config.js

require('dotenv').config();

const backupConfig = {
    enabled: process.env.BACKUP_ENABLED === 'true',
    provider: process.env.BACKUP_PROVIDER || 'your-backup-provider-here',
    accessKeyId: process.env.BACKUP_ACCESS_KEY_ID || 'your-backup-access-key-id-here',
    secretAccessKey: process.env.BACKUP_SECRET_ACCESS_KEY || 'your-backup-secret-access-key-here',
    region: process.env.BACKUP_REGION || 'your-backup-region-here',
    bucket: process.env.BACKUP_BUCKET || 'your-backup-bucket-here',
    schedule: process.env.BACKUP_SCHEDULE || '0 2 * * *', // default: daily at 2 AM
    retentionDays: parseInt(process.env.BACKUP_RETENTION_DAYS, 10) || 30,
    logging: {
        level: 'info',
        logFile: './logs/backup.log',
        logToConsole: true
    }
};

module.exports = backupConfig;
