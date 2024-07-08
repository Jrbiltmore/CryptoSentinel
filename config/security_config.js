module.exports = {
    encryption: {
        algorithm: "aes-256-cbc",
        key: process.env.ENCRYPTION_KEY || "defaultencryptionkeydefaultencryptionkey",
        ivLength: 16,
    },
    hashing: {
        algorithm: "sha256",
        saltRounds: 10,
    },
    jwt: {
        secret: process.env.JWT_SECRET || "defaultjwtsecret",
        expiresIn: "1h",
    },
    cors: {
        origin: ["http://localhost:3000", "https://yourdomain.com"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    },
    rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    },
};
