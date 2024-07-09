
module.exports = {
    paypal: {
        clientId: process.env.PAYPAL_CLIENT_ID || 'your-paypal-client-id',
        clientSecret: process.env.PAYPAL_CLIENT_SECRET || 'your-paypal-client-secret',
        mode: process.env.PAYPAL_MODE || 'sandbox', // or 'live'
        endpoints: {
            base: 'https://api-m.sandbox.paypal.com',
            payments: '/v1/payments/payment',
            orders: '/v2/checkout/orders',
            subscriptions: '/v1/billing/subscriptions',
            webhooks: '/v1/notifications/webhooks'
        },
        payment: {
            currency: 'USD',
            methods: ['paypal', 'credit_card', 'debit_card'],
            redirectUrls: {
                returnUrl: 'https://yourapp.com/paypal/return',
                cancelUrl: 'https://yourapp.com/paypal/cancel'
            }
        },
        webhooks: {
            enabled: true,
            events: [
                'PAYMENT.SALE.COMPLETED',
                'PAYMENT.SALE.DENIED',
                'BILLING.SUBSCRIPTION.CREATED',
                'BILLING.SUBSCRIPTION.CANCELLED'
            ],
            url: 'https://yourapp.com/paypal/webhook'
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.PAYPAL_ENCRYPTION_KEY || 'default-paypal-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'finance', 'support'],
                permissions: {
                    admin: ['create', 'read', 'update', 'delete'],
                    finance: ['create', 'read', 'update'],
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
