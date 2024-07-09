
module.exports = {
    network: {
        environments: {
            development: {
                name: 'development',
                url: 'http://localhost:3000',
                databaseUrl: 'postgresql://postgres:password@localhost:5432/dev_db',
                redisUrl: 'redis://localhost:6379',
                apiGatewayUrl: 'http://localhost:4000',
                monitoring: {
                    enabled: true,
                    interval: 30000 // in milliseconds
                }
            },
            staging: {
                name: 'staging',
                url: 'https://staging.yourapp.com',
                databaseUrl: 'postgresql://postgres:password@staging-db.yourapp.com:5432/staging_db',
                redisUrl: 'redis://staging-redis.yourapp.com:6379',
                apiGatewayUrl: 'https://staging-api.yourapp.com',
                monitoring: {
                    enabled: true,
                    interval: 60000 // in milliseconds
                }
            },
            production: {
                name: 'production',
                url: 'https://yourapp.com',
                databaseUrl: 'postgresql://postgres:password@db.yourapp.com:5432/prod_db',
                redisUrl: 'redis://redis.yourapp.com:6379',
                apiGatewayUrl: 'https://api.yourapp.com',
                monitoring: {
                    enabled: true,
                    interval: 120000 // in milliseconds
                }
            }
        },
        loadBalancing: {
            enabled: true,
            strategy: 'round-robin',
            instances: [
                'http://server1.yourapp.com',
                'http://server2.yourapp.com',
                'http://server3.yourapp.com'
            ]
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.NETWORK_ENCRYPTION_KEY || 'default-network-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'user', 'guest'],
                permissions: {
                    admin: ['create', 'read', 'update', 'delete'],
                    user: ['read', 'update'],
                    guest: ['read']
                }
            }
        },
        monitoring: {
            enabled: true,
            interval: 60000, // in milliseconds
            metrics: ['uptime', 'latency', 'errorRate'],
            alerting: {
                enabled: true,
                threshold: {
                    latency: 200, // in milliseconds
                    errorRate: 0.05
                },
                channels: ['email', 'slack']
            }
        },
        compliance: {
            gdpr: {
                enabled: true,
                dataRetentionPeriod: 365 // in days
            },
            hipaa: {
                enabled: false // Enable if dealing with health-related data
            }
        }
    }
};
