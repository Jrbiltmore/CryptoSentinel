
module.exports = {
    blockchain: {
        network: process.env.BLOCKCHAIN_NETWORK || 'mainnet',
        rpcUrl: process.env.BLOCKCHAIN_RPC_URL || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
        chainId: process.env.BLOCKCHAIN_CHAIN_ID || 1,
        gasPrice: process.env.BLOCKCHAIN_GAS_PRICE || '20000000000',  // in wei
        gasLimit: process.env.BLOCKCHAIN_GAS_LIMIT || '8000000',  // in wei
        accounts: {
            mnemonic: process.env.BLOCKCHAIN_MNEMONIC || 'your mnemonic here',
            privateKey: process.env.BLOCKCHAIN_PRIVATE_KEY || 'your private key here'
        },
        contracts: {
            token: {
                abi: require('../contracts/TokenABI.json'),
                address: process.env.TOKEN_CONTRACT_ADDRESS || '0xYourTokenContractAddress'
            },
            factory: {
                abi: require('../contracts/FactoryABI.json'),
                address: process.env.FACTORY_CONTRACT_ADDRESS || '0xYourFactoryContractAddress'
            }
        },
        events: {
            enabled: true,
            pollingInterval: 15000,  // in milliseconds
            contracts: [
                {
                    name: 'token',
                    events: ['Transfer', 'Approval']
                },
                {
                    name: 'factory',
                    events: ['NewTokenCreated']
                }
            ]
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-gcm',
                key: process.env.BLOCKCHAIN_ENCRYPTION_KEY || 'default-blockchain-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'user'],
                permissions: {
                    admin: ['deploy', 'update', 'delete'],
                    user: ['read', 'transact']
                }
            }
        },
        monitoring: {
            enabled: true,
            interval: 60000,  // in milliseconds
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
                    transactionValue: 10000  // in USD
                }
            },
            kyc: {
                enabled: true,
                providers: ['provider1', 'provider2']
            }
        }
    }
};
