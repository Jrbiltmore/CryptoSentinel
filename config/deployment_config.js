
module.exports = {
    deployment: {
        environments: {
            development: {
                name: 'development',
                url: 'http://localhost:3000',
                databaseUrl: 'postgresql://postgres:password@localhost:5432/dev_db',
                redisUrl: 'redis://localhost:6379',
                s3Bucket: 'dev-bucket',
                cloudfrontDistributionId: 'E1DEV',
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
                s3Bucket: 'staging-bucket',
                cloudfrontDistributionId: 'E1STAGING',
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
                s3Bucket: 'prod-bucket',
                cloudfrontDistributionId: 'E1PROD',
                monitoring: {
                    enabled: true,
                    interval: 120000 // in milliseconds
                }
            }
        },
        aws: {
            region: 'us-east-1',
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'your-aws-access-key-id',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'your-aws-secret-access-key'
        },
        docker: {
            registry: 'yourdockerhubaccount',
            image: 'yourapp',
            tag: process.env.DOCKER_TAG || 'latest'
        },
        ciCd: {
            provider: 'GitHub Actions',
            workflows: {
                test: '.github/workflows/test.yml',
                build: '.github/workflows/build.yml',
                deploy: '.github/workflows/deploy.yml'
            }
        },
        notifications: {
            email: {
                enabled: true,
                smtpServer: 'smtp.yourapp.com',
                port: 587,
                user: 'no-reply@yourapp.com',
                password: process.env.EMAIL_PASSWORD || 'your-email-password',
                recipients: ['devops@yourapp.com', 'admin@yourapp.com']
            },
            slack: {
                enabled: true,
                webhookUrl: process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/your/slack/webhook'
            }
        }
    }
};
