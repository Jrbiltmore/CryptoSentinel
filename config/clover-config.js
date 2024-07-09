
module.exports = {
    clover: {
        apiKey: process.env.CLOVER_API_KEY || 'your-clover-api-key-here',
        apiSecret: process.env.CLOVER_API_SECRET || 'your-clover-api-secret-here',
        merchantId: process.env.CLOVER_MERCHANT_ID || 'your-merchant-id-here',
        endpoints: {
            base: 'https://api.clover.com/v3',
            orders: '/orders',
            payments: '/payments',
            items: '/items',
            customers: '/customers'
        },
        payment: {
            currency: 'USD',
            defaultTaxRate: 0.08,
            paymentMethods: ['credit_card', 'debit_card', 'gift_card', 'cash', 'check']
        },
        inventory: {
            trackInventory: true,
            lowStockThreshold: 10,
            alertEmail: 'inventory-alerts@yourcompany.com'
        },
        reporting: {
            enabled: true,
            interval: 'daily',
            reportTypes: ['sales', 'inventory', 'customer'],
            recipients: ['manager@yourcompany.com', 'accounting@yourcompany.com']
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.CLOVER_ENCRYPTION_KEY || 'default-clover-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'sales', 'accounting'],
                permissions: {
                    admin: ['create', 'read', 'update', 'delete'],
                    sales: ['create', 'read', 'update'],
                    accounting: ['read', 'update']
                }
            }
        },
        compliance: {
            pciDss: {
                enabled: true,
                validation: 'SAQ-D'
            }
        }
    }
};
