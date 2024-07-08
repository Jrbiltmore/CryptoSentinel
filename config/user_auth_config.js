module.exports = {
    jwtSecret: process.env.JWT_SECRET || "defaultsecret",
    tokenExpiration: "1h",
    roles: {
        admin: ["create", "read", "update", "delete"],
        user: ["read"],
        guest: ["read"],
    },
    userAuth: {
        minPasswordLength: 8,
        maxPasswordLength: 128,
        passwordPolicy: {
            requireLowercase: true,
            requireUppercase: true,
            requireNumbers: true,
            requireSymbols: true,
        },
        maxLoginAttempts: 5,
        lockoutTime: 30, // in minutes
    },
};
