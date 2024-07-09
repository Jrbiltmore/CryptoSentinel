
module.exports = {
    ingenico: {
        apiKey: process.env.INGENICO_API_KEY || 'your-ingenico-api-key-here',
        apiSecret: process.env.INGENICO_API_SECRET || 'your-ingenico-api-secret-here',
        merchantId: process.env.INGENICO_MERCHANT_ID || 'your-merchant-id-here',
        endpoints: {
            base: 'https://api.globalcollect.com/v1',
            payments: '/payments',
            refunds: '/refunds',
            tokens: '/tokens',
            customers: '/customers'
        },
        payment: {
            currency: 'USD',
            defaultTaxRate: 0.08,
            paymentMethods: ['credit_card', 'debit_card', 'paypal', 'bank_transfer'],
            retryAttempts: 3,
            retryInterval: 5000 // in milliseconds
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.INGENICO_ENCRYPTION_KEY || 'default-ingenico-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'sales', 'support'],
                permissions: {
                    admin: ['create', 'read', 'update', 'delete'],
                    sales: ['create', 'read', 'update'],
                    support: ['read', 'update']
                }
            }
        },
        monitoring: {
            enabled: true,
            interval: 60000, // in milliseconds
            metrics: ['transactionCount', 'successRate', 'errorRate'],
            alerting: {
                enabled: true,
                threshold: {
                    transactionCount: 1000,
                    errorRate: 0.05
                },
                channels: ['email', 'slack']
            }
        },
        compliance: {
            pciDss: {
                enabled: true,
                validation: 'SAQ-D'
            },
            gdpr: {
                enabled: true,
                dataRetentionPeriod: 365 // in days
            }
        }
    }
};
