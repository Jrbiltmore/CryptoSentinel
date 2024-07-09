// square-config.js

require('dotenv').config();

const squareConfig = {
    apiKey: process.env.SQUARE_API_KEY || 'your-square-api-key-here',
    apiSecret: process.env.SQUARE_API_SECRET || 'your-square-api-secret-here',
    apiEndpoint: process.env.SQUARE_API_ENDPOINT || 'https://connect.squareup.com/v2',
    webhookSecret: process.env.SQUARE_WEBHOOK_SECRET || 'your-square-webhook-secret-here',

    // Transaction settings
    transaction: {
        currency: 'USD',
        minAmount: 1.00,
        maxAmount: 10000.00,
        supportedMethods: ['card', 'bank_transfer', 'crypto'],
        feePercent: 2.75,
        feeFlat: 0.15
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
        logFile: './logs/square.log',
        logToConsole: true
    },

    // Webhook settings
    webhook: {
        enabled: true,
        url: process.env.SQUARE_WEBHOOK_URL || 'https://yourdomain.com/webhook',
        events: ['payment.created', 'payment.updated', 'payment.canceled']
    },

    // OAuth settings for Square
    oauth: {
        clientId: process.env.SQUARE_CLIENT_ID || 'your-square-client-id-here',
        clientSecret: process.env.SQUARE_CLIENT_SECRET || 'your-square-client-secret-here',
        redirectUri: process.env.SQUARE_REDIRECT_URI || 'your-square-redirect-uri-here',
        scopes: ['MERCHANT_PROFILE_READ', 'PAYMENTS_READ', 'PAYMENTS_WRITE'],
        authorizationUrl: process.env.SQUARE_AUTHORIZATION_URL || 'https://connect.squareup.com/oauth2/authorize',
        tokenUrl: process.env.SQUARE_TOKEN_URL || 'https://connect.squareup.com/oauth2/token',
        userInfoUrl: process.env.SQUARE_USER_INFO_URL || 'https://connect.squareup.com/v2/merchants/me'
    }
};

module.exports = squareConfig;
