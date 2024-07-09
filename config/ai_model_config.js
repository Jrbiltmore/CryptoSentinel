
module.exports = {
    aiModeling: {
        apiKey: process.env.AI_MODELING_API_KEY || 'your-api-key-here',
        modelName: 'gpt-4.5-turbo',  // Hypothetical future model
        endpoints: {
            predict: 'https://api.openai.com/v1/engines/gpt-4.5-turbo/completions',
            fineTune: 'https://api.openai.com/v1/fine-tunes',
            embeddings: 'https://api.openai.com/v1/embeddings'
        },
        parameters: {
            temperature: 0.7,
            maxTokens: 2048,
            topP: 1.0,
            frequencyPenalty: 0.0,
            presencePenalty: 0.0
        },
        fineTuning: {
            batchSize: 32,
            learningRate: 1e-5,
            epochs: 5
        },
        dataPreprocessing: {
            cleaning: {
                removeHTML: true,
                lowerCase: true,
                removeStopWords: true
            },
            augmentation: {
                synonymReplacement: true,
                randomInsertion: true,
                randomSwap: true,
                randomDeletion: true
            }
        },
        monitoring: {
            enabled: true,
            interval: 60000,  // in milliseconds
            metrics: ['accuracy', 'loss', 'precision', 'recall'],
            alerting: {
                enabled: true,
                threshold: {
                    accuracy: 0.95,
                    loss: 0.1
                },
                channels: ['email', 'slack']
            }
        },
        security: {
            encryption: {
                enabled: true,
                algorithm: 'aes-256-cbc',
                key: process.env.AI_MODEL_ENCRYPTION_KEY || 'default-encryption-key'
            },
            accessControl: {
                roles: ['admin', 'user'],
                permissions: {
                    admin: ['create', 'read', 'update', 'delete'],
                    user: ['read']
                }
            }
        },
        compliance: {
            gdpr: {
                enabled: true,
                dataRetentionPeriod: 365  // in days
            },
            hipaa: {
                enabled: false  // Enable if dealing with health-related data
            }
        }
    }
};
