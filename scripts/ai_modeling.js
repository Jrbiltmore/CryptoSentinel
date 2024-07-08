
const axios = require('axios');
const { aiModeling } = require('../config/ai_model_config');

async function predictTokenPerformance(tokenData) {
    try {
        const response = await axios.post(aiModeling.endpoints.predict, {
            prompt: `Predict the performance of the following token data: ${JSON.stringify(tokenData)}`,
            temperature: aiModeling.parameters.temperature,
            max_tokens: aiModeling.parameters.maxTokens,
            top_p: aiModeling.parameters.topP,
            frequency_penalty: aiModeling.parameters.frequencyPenalty,
            presence_penalty: aiModeling.parameters.presencePenalty,
        }, {
            headers: {
                'Authorization': `Bearer ${aiModeling.apiKey}`
            }
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error predicting token performance:', error);
        throw error;
    }
}

async function fineTuneModel(trainingData) {
    try {
        const response = await axios.post(aiModeling.endpoints.fineTune, {
            training_file: trainingData,
            model: aiModeling.modelName,
        }, {
            headers: {
                'Authorization': `Bearer ${aiModeling.apiKey}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fine-tuning model:', error);
        throw error;
    }
}

async function getEmbeddings(text) {
    try {
        const response = await axios.post(aiModeling.endpoints.embeddings, {
            input: text,
        }, {
            headers: {
                'Authorization': `Bearer ${aiModeling.apiKey}`
            }
        });

        return response.data.data;
    } catch (error) {
        console.error('Error getting embeddings:', error);
        throw error;
    }
}

module.exports = {
    predictTokenPerformance,
    fineTuneModel,
    getEmbeddings,
};
