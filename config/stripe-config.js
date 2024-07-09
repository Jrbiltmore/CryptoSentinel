
module.exports = {
    stripe: {
        apiKey: process.env.STRIPE_API_KEY || 'your-stripe-api-key',
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'your-stripe-webhook-secret',
        currency: 'USD',
        endpoints: {
            base: 'https://api.stripe.com/v1',
            paymentIntents: '/payment_intents',
            customers: '/customers',
            subscriptions: '/subscriptions',
            invoices: '/invoices',
            refunds: '/refunds'
        },
        payment: {
            methods: ['card', 'bank_transfer', 'alipay', 'wechat'],
            successUrl: 'https://yourapp.com/payment/success',
            cancelUrl: 'https://yourapp.com/payment/cancel'
        },
        webhooks: {
            enabled: true,
            url: 'https://yourapp.com/stripe/webhook',
            events: [
                'payment_intent.succeeded',
                'payment_intent.payment_failed',
                'customer.subscription.created',
                'customer.subscription.deleted',
                'invoice.payment_succeeded',
                'invoice.payment_failed'
            ]
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.STRIPE_ENCRYPTION_KEY || 'default-stripe-encryption-key'
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
