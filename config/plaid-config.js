
module.exports = {
    plaid: {
        clientId: process.env.PLAID_CLIENT_ID || 'your-plaid-client-id',
        secret: process.env.PLAID_SECRET || 'your-plaid-secret',
        env: process.env.PLAID_ENV || 'sandbox', // or 'development', 'production'
        products: ['auth', 'transactions', 'identity'],
        webhook: {
            enabled: true,
            url: 'https://yourapp.com/plaid/webhook',
            events: ['TRANSACTIONS:SYNC', 'ITEM:ERROR']
        },
        endpoints: {
            base: 'https://sandbox.plaid.com',
            auth: '/auth/get',
            transactions: '/transactions/get',
            identity: '/identity/get',
            linkToken: '/link/token/create'
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.PLAID_ENCRYPTION_KEY || 'default-plaid-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'finance', 'support'],
                permissions: {
                    admin: ['create', 'read', 'update', 'delete'],
                    finance: ['read', 'update'],
                    support: ['read', 'update']
                }
            }
        },
        monitoring: {
            enabled: true,
            interval: 60000, // in milliseconds
            metrics: ['requestCount', 'errorRate', 'latency'],
            alerting: {
                enabled: true,
                threshold: {
                    requestCount: 1000,
                    errorRate: 0.05
                },
                channels: ['email', 'slack']
            }
        },
        compliance: {
            aml: {
                enabled: true,
                thresholds: {
                    transactionValue: 10000 // in USD
                }
            },
            kyc: {
                enabled: true,
                providers: ['provider1', 'provider2']
            }
        }
    }
};
