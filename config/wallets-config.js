// wallets-config.js

require('dotenv').config();

const walletsConfig = {
    defaultWallet: {
        provider: process.env.DEFAULT_WALLET_PROVIDER || 'your-default-wallet-provider-here',
        apiKey: process.env.DEFAULT_WALLET_API_KEY || 'your-default-wallet-api-key-here',
        apiSecret: process.env.DEFAULT_WALLET_API_SECRET || 'your-default-wallet-api-secret-here',
        walletType: 'hot', // Options: 'hot', 'cold'
        encryption: {
            algorithm: 'AES-256-CBC',
            secretKey: process.env.WALLET_ENCRYPTION_KEY || 'your-encryption-key-here'
        },
        supportedCryptocurrencies: ['BTC', 'ETH', 'USDT', 'XRP', 'LTC'],
        transactionFees: {
            BTC: 0.0001,
            ETH: 0.005,
            USDT: 1.0,
            XRP: 0.02,
            LTC: 0.001
        }
    },

    userWallets: {
        provider: process.env.USER_WALLET_PROVIDER || 'your-user-wallet-provider-here',
        apiKey: process.env.USER_WALLET_API_KEY || 'your-user-wallet-api-key-here',
        apiSecret: process.env.USER_WALLET_API_SECRET || 'your-user-wallet-api-secret-here',
        walletType: 'hot',
        encryption: {
            algorithm: 'AES-256-CBC',
            secretKey: process.env.USER_WALLET_ENCRYPTION_KEY || 'your-user-encryption-key-here'
        },
        supportedCryptocurrencies: ['BTC', 'ETH', 'USDT', 'XRP', 'LTC'],
        transactionFees: {
            BTC: 0.0002,
            ETH: 0.01,
            USDT: 1.5,
            XRP: 0.03,
            LTC: 0.002
        }
    },

    stakingWallets: {
        provider: process.env.STAKING_WALLET_PROVIDER || 'your-staking-wallet-provider-here',
        apiKey: process.env.STAKING_WALLET_API_KEY || 'your-staking-wallet-api-key-here',
        apiSecret: process.env.STAKING_WALLET_API_SECRET || 'your-staking-wallet-api-secret-here',
        walletType: 'cold',
        encryption: {
            algorithm: 'AES-256-CBC',
            secretKey: process.env.STAKING_WALLET_ENCRYPTION_KEY || 'your-staking-encryption-key-here'
        },
        supportedCryptocurrencies: ['ETH', 'USDT', 'DOT', 'ADA'],
        transactionFees: {
            ETH: 0.003,
            USDT: 2.0,
            DOT: 0.1,
            ADA: 0.05
        }
    },

    // Security settings
    security: {
        enableTwoFactorAuth: true,
        securityKeys: {
            enabled: process.env.SECURITY_KEYS_ENABLED === 'true',
            provider: process.env.SECURITY_KEYS_PROVIDER || 'your-security-keys-provider-here',
            apiKey: process.env.SECURITY_KEYS_API_KEY || 'your-security-keys-api-key-here'
        }
    },

    // Retry settings
    retry: {
        maxRetries: 3,
        retryDelay: 2000 // in milliseconds
    },

    // Logging settings
    logging: {
        level: 'info', // options: 'error', 'warn', 'info', 'verbose', 'debug', 'silly'
        logFile: './logs/wallets.log',
        logToConsole: true
    },

    // Webhook settings
    webhook: {
        enabled: true,
        url: process.env.WALLETS_WEBHOOK_URL || 'https://yourdomain.com/wallets/webhook',
        events: ['wallet.created', 'wallet.updated', 'wallet.deleted', 'transaction.created', 'transaction.failed', 'transaction.succeeded']
    }
};

module.exports = walletsConfig;
