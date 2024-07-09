// tapnpay-config.js

const tapnpayConfig = {
    apiKey: process.env.TAPNPAY_API_KEY || 'your-api-key-here',
    apiSecret: process.env.TAPNPAY_API_SECRET || 'your-api-secret-here',
    apiEndpoint: process.env.TAPNPAY_API_ENDPOINT || 'https://api.tapnpay.com/v1',
    webhookSecret: process.env.TAPNPAY_WEBHOOK_SECRET || 'your-webhook-secret-here',
    
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
        logFile: './logs/tapnpay.log',
        logToConsole: true
    },
    
    // Webhook settings
    webhook: {
        enabled: true,
        url: process.env.TAPNPAY_WEBHOOK_URL || 'https://yourdomain.com/webhook',
        events: ['transaction.created', 'transaction.failed', 'transaction.succeeded']
    }
};

module.exports = tapnpayConfig;
