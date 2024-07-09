
module.exports = {
    infura: {
        projectId: process.env.INFURA_PROJECT_ID || 'your-infura-project-id',
        projectSecret: process.env.INFURA_PROJECT_SECRET || 'your-infura-project-secret',
        endpoints: {
            mainnet: 'https://mainnet.infura.io/v3/',
            ropsten: 'https://ropsten.infura.io/v3/',
            rinkeby: 'https://rinkeby.infura.io/v3/',
            kovan: 'https://kovan.infura.io/v3/',
            goerli: 'https://goerli.infura.io/v3/'
        },
        network: process.env.INFURA_NETWORK || 'mainnet',
        gasPrice: process.env.INFURA_GAS_PRICE || '20000000000', // in wei
        gasLimit: process.env.INFURA_GAS_LIMIT || '8000000', // in wei
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.INFURA_ENCRYPTION_KEY || 'default-infura-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'user'],
                permissions: {
                    admin: ['create', 'read', 'update', 'delete'],
                    user: ['read', 'transact']
                }
            }
        },
        monitoring: {
            enabled: true,
            interval: 60000, // in milliseconds
            metrics: ['transactionCount', 'blockTime', 'gasUsed', 'errorRate'],
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
