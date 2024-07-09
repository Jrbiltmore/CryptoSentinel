// notification-config.js

require('dotenv').config();

const notificationConfig = {
    email: {
        enabled: process.env.EMAIL_NOTIFICATIONS_ENABLED === 'true',
        smtp: {
            host: process.env.SMTP_HOST || 'smtp.yourdomain.com',
            port: process.env.SMTP_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'your-smtp-user-here',
                pass: process.env.SMTP_PASS || 'your-smtp-password-here'
            }
        },
        from: process.env.EMAIL_FROM || 'no-reply@yourdomain.com'
    },
    sms: {
        enabled: process.env.SMS_NOTIFICATIONS_ENABLED === 'true',
        provider: process.env.SMS_PROVIDER || 'your-sms-provider-here',
        apiKey: process.env.SMS_API_KEY || 'your-sms-api-key-here',
        sender: process.env.SMS_SENDER || 'your-sms-sender-id-here'
    },
    push: {
        enabled: process.env.PUSH_NOTIFICATIONS_ENABLED === 'true',
        service: process.env.PUSH_SERVICE || 'your-push-service-here',
        apiKey: process.env.PUSH_API_KEY || 'your-push-api-key-here'
    },
    logging: {
        level: 'info',
        logFile: './logs/notification.log',
        logToConsole: true
    }
};

module.exports = notificationConfig;
