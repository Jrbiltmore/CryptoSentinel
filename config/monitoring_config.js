module.exports = {
    monitoring: {
        enabled: true,
        interval: 60000, // in milliseconds
        services: {
            blockchain: {
                url: process.env.BLOCKCHAIN_URL || "http://localhost:8545",
                healthCheckEndpoint: "/health",
                retryAttempts: 3,
                retryInterval: 5000, // in milliseconds
            },
            database: {
                url: process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/us_military_crypto",
                healthCheckQuery: "SELECT 1",
                retryAttempts: 3,
                retryInterval: 5000, // in milliseconds
            },
            cache: {
                url: process.env.REDIS_URL || "redis://localhost:6379",
                healthCheckCommand: "PING",
                retryAttempts: 3,
                retryInterval: 5000, // in milliseconds
            },
        },
    },
};
