// toast-config.js

const toastConfig = {
    apiKey: process.env.TOAST_API_KEY || 'your-api-key-here',
    apiSecret: process.env.TOAST_API_SECRET || 'your-api-secret-here',
    apiEndpoint: process.env.TOAST_API_ENDPOINT || 'https://api.toasttab.com/v1',
    webhookSecret: process.env.TOAST_WEBHOOK_SECRET || 'your-webhook-secret-here',
    
    // Transaction settings
    transaction: {
        currency: 'USD',
        minAmount: 1.00,
        maxAmount: 10000.00,
        supportedMethods: ['card', 'bank_transfer', 'crypto'],
        feePercent: 2.5,
        feeFlat: 0.30
    },
    
    // Security settings
    security: {
        enableTwoFactorAuth: true,
        encryptionAlgorithm: 'AES-256-CBC',
        hashAlgorithm: 'SHA-256'
    },
    
    // Retry settings
    retry: {
        maxRetries: 3,
        retryDelay: 2000 // in milliseconds
    },
    
    // Logging settings
    logging: {
        level: 'info', // options: 'error', 'warn', 'info', 'verbose', 'debug', 'silly'
        logFile: './logs/toast.log',
        logToConsole: true
    },
    
    // Webhook settings
    webhook: {
        enabled: true,
        url: process.env.TOAST_WEBHOOK_URL || 'https://yourdomain.com/webhook',
        events: ['transaction.created', 'transaction.failed', 'transaction.succeeded']
    }
};

module.exports = toastConfig;
