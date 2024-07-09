// user_auth_config.js

require('dotenv').config();

const userAuthConfig = {
    jwt: {
        secret: process.env.JWT_SECRET || 'your-jwt-secret-here',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
        algorithm: process.env.JWT_ALGORITHM || 'HS256',
        issuer: process.env.JWT_ISSUER || 'your-domain.com',
        audience: process.env.JWT_AUDIENCE || 'your-audience'
    },

    bcrypt: {
        saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10,
    },

    oauth: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || 'your-google-client-id-here',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your-google-client-secret-here',
            redirectUri: process.env.GOOGLE_REDIRECT_URI || 'your-google-redirect-uri-here',
            scopes: ['profile', 'email'],
            authorizationUrl: process.env.GOOGLE_AUTHORIZATION_URL || 'https://accounts.google.com/o/oauth2/auth',
            tokenUrl: process.env.GOOGLE_TOKEN_URL || 'https://oauth2.googleapis.com/token',
            userInfoUrl: process.env.GOOGLE_USER_INFO_URL || 'https://www.googleapis.com/oauth2/v3/userinfo'
        },
        facebook: {
            clientId: process.env.FACEBOOK_CLIENT_ID || 'your-facebook-client-id-here',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'your-facebook-client-secret-here',
            redirectUri: process.env.FACEBOOK_REDIRECT_URI || 'your-facebook-redirect-uri-here',
            scopes: ['public_profile', 'email'],
            authorizationUrl: process.env.FACEBOOK_AUTHORIZATION_URL || 'https://www.facebook.com/dialog/oauth',
            tokenUrl: process.env.FACEBOOK_TOKEN_URL || 'https://graph.facebook.com/v9.0/oauth/access_token',
            userInfoUrl: process.env.FACEBOOK_USER_INFO_URL || 'https://graph.facebook.com/me'
        },
        instagram: {
            clientId: process.env.INSTAGRAM_CLIENT_ID || 'your-instagram-client-id-here',
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || 'your-instagram-client-secret-here',
            redirectUri: process.env.INSTAGRAM_REDIRECT_URI || 'your-instagram-redirect-uri-here',
            scopes: ['user_profile', 'user_media'],
            authorizationUrl: process.env.INSTAGRAM_AUTHORIZATION_URL || 'https://api.instagram.com/oauth/authorize',
            tokenUrl: process.env.INSTAGRAM_TOKEN_URL || 'https://api.instagram.com/oauth/access_token',
            userInfoUrl: process.env.INSTAGRAM_USER_INFO_URL || 'https://graph.instagram.com/me'
        },
        apple: {
            clientId: process.env.APPLE_CLIENT_ID || 'your-apple-client-id-here',
            clientSecret: process.env.APPLE_CLIENT_SECRET || 'your-apple-client-secret-here',
            redirectUri: process.env.APPLE_REDIRECT_URI || 'your-apple-redirect-uri-here',
            scopes: ['name', 'email'],
            authorizationUrl: process.env.APPLE_AUTHORIZATION_URL || 'https://appleid.apple.com/auth/authorize',
            tokenUrl: process.env.APPLE_TOKEN_URL || 'https://appleid.apple.com/auth/token',
            userInfoUrl: process.env.APPLE_USER_INFO_URL || 'https://appleid.apple.com/auth/userinfo'
        },
        yahoo: {
            clientId: process.env.YAHOO_CLIENT_ID || 'your-yahoo-client-id-here',
            clientSecret: process.env.YAHOO_CLIENT_SECRET || 'your-yahoo-client-secret-here',
            redirectUri: process.env.YAHOO_REDIRECT_URI || 'your-yahoo-redirect-uri-here',
            scopes: ['profile', 'email'],
            authorizationUrl: process.env.YAHOO_AUTHORIZATION_URL || 'https://api.login.yahoo.com/oauth2/request_auth',
            tokenUrl: process.env.YAHOO_TOKEN_URL || 'https://api.login.yahoo.com/oauth2/get_token',
            userInfoUrl: process.env.YAHOO_USER_INFO_URL || 'https://api.login.yahoo.com/openid/v1/userinfo'
        },
        aol: {
            clientId: process.env.AOL_CLIENT_ID || 'your-aol-client-id-here',
            clientSecret: process.env.AOL_CLIENT_SECRET || 'your-aol-client-secret-here',
            redirectUri: process.env.AOL_REDIRECT_URI || 'your-aol-redirect-uri-here',
            scopes: ['profile', 'email'],
            authorizationUrl: process.env.AOL_AUTHORIZATION_URL || 'https://api.screenname.aol.com/oauth2/request_auth',
            tokenUrl: process.env.AOL_TOKEN_URL || 'https://api.screenname.aol.com/oauth2/get_token',
            userInfoUrl: process.env.AOL_USER_INFO_URL || 'https://api.screenname.aol.com/openid/v1/userinfo'
        }
    },

    iris: {
        enabled: process.env.IRIS_AUTH_ENABLED === 'true',
        apiUrl: process.env.IRIS_API_URL || 'https://api.iris.com/v1',
        apiKey: process.env.IRIS_API_KEY || 'your-iris-api-key-here',
        deviceId: process.env.IRIS_DEVICE_ID || 'your-iris-device-id-here'
    },

    sso: {
        enabled: process.env.SSO_ENABLED === 'true',
        ssoUrl: process.env.SSO_URL || 'https://sso.yourdomain.com',
        clientId: process.env.SSO_CLIENT_ID || 'your-sso-client-id-here',
        clientSecret: process.env.SSO_CLIENT_SECRET || 'your-sso-client-secret-here',
        redirectUri: process.env.SSO_REDIRECT_URI || 'your-sso-redirect-uri-here'
    },

    twoFactorAuth: {
        enabled: process.env.TWO_FACTOR_AUTH_ENABLED === 'true',
        methods: ['email', 'sms', 'authenticator_app'],
        sms: {
            provider: process.env.SMS_PROVIDER || 'your-sms-provider-here',
            apiKey: process.env.SMS_API_KEY || 'your-sms-api-key-here',
            sender: process.env.SMS_SENDER || 'your-sms-sender-id-here'
        }
    },

    securityKeys: {
        enabled: process.env.SECURITY_KEYS_ENABLED === 'true',
        provider: process.env.SECURITY_KEYS_PROVIDER || 'your-security-keys-provider-here',
        apiKey: process.env.SECURITY_KEYS_API_KEY || 'your-security-keys-api-key-here'
    },

    backupCodes: {
        enabled: process.env.BACKUP_CODES_ENABLED === 'true',
        numberOfCodes: parseInt(process.env.BACKUP_CODES_NUMBER, 10) || 10
    },

    trustedDevices: {
        enabled: process.env.TRUSTED_DEVICES_ENABLED === 'true',
        deviceExpiryDays: parseInt(process.env.TRUSTED_DEVICES_EXPIRY_DAYS, 10) || 30
    },

    roles: {
        user: {
            permissions: ['read', 'write', 'update'],
            description: 'General user with basic access'
        },
        engager: {
            permissions: ['read', 'write', 'update', 'engage'],
            description: 'User with engagement permissions'
        },
        moderator: {
            permissions: ['read', 'write', 'update', 'delete', 'moderate'],
            description: 'User with moderation permissions'
        },
        administrator: {
            permissions: ['read', 'write', 'update', 'delete', 'manage'],
            description: 'User with administrative permissions'
        },
        developer: {
            permissions: ['read', 'write', 'update', 'delete', 'develop'],
            description: 'User with development permissions'
        },
        auditor: {
            permissions: ['read', 'audit'],
            description: 'User with auditing permissions'
        }
    },

    session: {
        secret: process.env.SESSION_SECRET || 'your-session-secret-here',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        },
        store: {
            type: 'redis',
            host: process.env.REDIS_HOST || '127.0.0.1',
            port: process.env.REDIS_PORT || 6379,
            pass: process.env.REDIS_PASS || 'your-redis-password-here',
            ttl: 86400 // 1 day
        }
    },

    emailVerification: {
        enabled: true,
        verificationUrl: process.env.EMAIL_VERIFICATION_URL || 'https://yourdomain.com/verify-email',
        verificationTokenExpiresIn: process.env.EMAIL_VERIFICATION_TOKEN_EXPIRES_IN || '1d',
        emailTemplate: {
            subject: 'Verify your email address',
            body: 'Please click the link below to verify your email address:',
            linkText: 'Verify Email'
        },
        smtp: {
            host: process.env.SMTP_HOST || 'smtp.yourdomain.com',
            port: process.env.SMTP_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'your-smtp-user-here',
                pass: process.env.SMTP_PASS || 'your-smtp-password-here'
            }
        }
    },

    passwordReset: {
        enabled: true,
        resetUrl: process.env.PASSWORD_RESET_URL || 'https://yourdomain.com/reset-password',
        resetTokenExpiresIn: process.env.PASSWORD_RESET_TOKEN_EXPIRES_IN || '1h',
        emailTemplate: {
            subject: 'Password Reset Request',
            body: 'Please click the link below to reset your password:',
            linkText: 'Reset Password'
        },
        smtp: {
            host: process.env.SMTP_HOST || 'smtp.yourdomain.com',
            port: process.env.SMTP_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'your-smtp-user-here',
                pass: process.env.SMTP_PASS || 'your-smtp-password-here'
            }
        }
    },

    logging: {
        level: process.env.LOG_LEVEL || 'info', // options: 'error', 'warn', 'info', 'verbose', 'debug', 'silly'
        logFile: process.env.LOG_FILE || './logs/user_auth.log',
        logToConsole: process.env.LOG_TO_CONSOLE === 'true',
        logToFile: process.env.LOG_TO_FILE === 'true',
        maxFileSize: parseInt(process.env.LOG_MAX_FILE_SIZE, 10) || 10485760, // 10 MB
        maxFiles: parseInt(process.env.LOG_MAX_FILES, 10) || 5
    }
};

module.exports = userAuthConfig;
