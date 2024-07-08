module.exports = {
    aiModeling: {
        modelProvider: "OpenAI",
        apiKey: process.env.OPENAI_API_KEY || "your-openai-api-key",
        modelName: "gpt-4",
        parameters: {
            temperature: 0.7,
            maxTokens: 150,
            topP: 1.0,
            frequencyPenalty: 0.0,
            presencePenalty: 0.6,
        },
        endpoints: {
            predict: "https://api.openai.com/v1/engines/davinci-codex/completions",
            fineTune: "https://api.openai.com/v1/fine-tunes",
            embeddings: "https://api.openai.com/v1/engines/text-embedding-ada-002/embeddings",
        },
    },
    monitoring: {
        enable: true,
        interval: 60000, // in milliseconds
        thresholds: {
            responseTime: 2000, // in milliseconds
            errorRate: 0.05, // 5%
        },
    },
};
