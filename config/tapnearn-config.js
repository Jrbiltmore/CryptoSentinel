// tapnearn-config.js

require('dotenv').config();

const tapnearnConfig = {
    apiKey: process.env.TAPNEARN_API_KEY || 'your-api-key-here',
    apiSecret: process.env.TAPNEARN_API_SECRET || 'your-api-secret-here',
    apiEndpoint: process.env.TAPNEARN_API_ENDPOINT || 'https://api.tapnearn.com/v1',
    webhookSecret: process.env.TAPNEARN_WEBHOOK_SECRET || 'your-webhook-secret-here',

    // Loan settings
    loan: {
        minAmount: 50.00,
        maxAmount: 10000.00,
        interestRate: 5.0, // Annual interest rate in percentage
        loanDurationDays: 365,
        repaymentStrategy: 'profits', // Options: 'profits', 'fixed'
    },
    
    // Staking and trading settings
    staking: {
        enabled: true,
        stakingProvider: process.env.STAKING_PROVIDER || 'your-staking-provider-here',
        apiKey: process.env.STAKING_API_KEY || 'your-staking-api-key-here',
        apiSecret: process.env.STAKING_API_SECRET || 'your-staking-api-secret-here',
        minimumStakeAmount: 10.00,
        stakingDurationDays: 30
    },
    
    trading: {
        enabled: true,
        tradingProvider: process.env.TRADING_PROVIDER || 'your-trading-provider-here',
        apiKey: process.env.TRADING_API_KEY || 'your-trading-api-key-here',
        apiSecret: process.env.TRADING_API_SECRET || 'your-trading-api-secret-here',
        tradingStrategy: 'automated', // Options: 'automated', 'manual'
    },

    // Profit distribution settings
    profitDistribution: {
        reinvestmentPercent: 40.0,
        savingsPercent: 30.0,
        checkingPercent: 30.0
    },

    // Credit bureau reporting settings
    creditBureau: {
        enabled: true,
        provider: process.env.CREDIT_BUREAU_PROVIDER || 'your-credit-bureau-provider-here',
        apiKey: process.env.CREDIT_BUREAU_API_KEY || 'your-credit-bureau-api-key-here',
        apiSecret: process.env.CREDIT_BUREAU_API_SECRET || 'your-credit-bureau-api-secret-here',
        reportFrequencyDays: 30
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
        logFile: './logs/tapnearn.log',
        logToConsole: true
    },
    
    // Webhook settings
    webhook: {
        enabled: true,
        url: process.env.TAPNEARN_WEBHOOK_URL || 'https://yourdomain.com/webhook',
        events: ['loan.created', 'loan.repaid', 'staking.started', 'staking.ended', 'trading.started', 'trading.ended']
    },

    // OAuth settings for Tap 'n' Earn
    oauth: {
        clientId: process.env.TAPNEARN_CLIENT_ID || 'your-tapnearn-client-id-here',
        clientSecret: process.env.TAPNEARN_CLIENT_SECRET || 'your-tapnearn-client-secret-here',
        redirectUri: process.env.TAPNEARN_REDIRECT_URI || 'your-tapnearn-redirect-uri-here',
        scopes: ['user_profile', 'user_funds'],
        authorizationUrl: process.env.TAPNEARN_AUTHORIZATION_URL || 'https://api.tapnearn.com/oauth2/authorize',
        tokenUrl: process.env.TAPNEARN_TOKEN_URL || 'https://api.tapnearn.com/oauth2/token',
        userInfoUrl: process.env.TAPNEARN_USER_INFO_URL || 'https://api.tapnearn.com/v1/userinfo'
    }
};

module.exports = tapnearnConfig;
