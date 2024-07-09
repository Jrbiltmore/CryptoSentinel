// database-config.js

require('dotenv').config();

const databaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'your-db-username-here',
    password: process.env.DB_PASSWORD || 'your-db-password-here',
    database: process.env.DB_NAME || 'your-db-name-here',
    dialect: process.env.DB_DIALECT || 'postgres',
    pool: {
        max: parseInt(process.env.DB_POOL_MAX, 10) || 10,
        min: parseInt(process.env.DB_POOL_MIN, 10) || 0,
        acquire: parseInt(process.env.DB_POOL_ACQUIRE, 10) || 30000,
        idle: parseInt(process.env.DB_POOL_IDLE, 10) || 10000
    },
    logging: process.env.DB_LOGGING === 'true' ? console.log : false
};

module.exports = databaseConfig;
