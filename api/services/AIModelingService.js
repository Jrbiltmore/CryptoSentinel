const AIModelingModel = require('../models/AIModelingModel');

class AIModelingService {
    // Create a new AI model
    async createAIModel(data) {
        const newModel = new AIModelingModel(data);
        try {
            const savedModel = await newModel.save();
            return savedModel;
        } catch (error) {
            throw new Error('Failed to create AI model');
        }
    }

    // Get all AI models
    async getAllAIModels() {
        try {
            const models = await AIModelingModel.find();
            return models;
        } catch (error) {
            throw new Error('Failed to get AI models');
        }
    }

    // Get an AI model by ID
    async getAIModelById(id) {
        try {
            const model = await AIModelingModel.findById(id);
            if (!model) {
                throw new Error('AI model not found');
            }
            return model;
        } catch (error) {
            throw new Error('Failed to get AI model');
        }
    }

    // Update an AI model by ID
    async updateAIModel(id, data) {
        try {
            const updatedModel = await AIModelingModel.findByIdAndUpdate(id, data, { new: true });
            if (!updatedModel) {
                throw new Error('AI model not found');
            }
            return updatedModel;
        } catch (error) {
            throw new Error('Failed to update AI model');
        }
    }

    // Delete an AI model by ID
    async deleteAIModel(id) {
        try {
            const deletedModel = await AIModelingModel.findByIdAndDelete(id);
            if (!deletedModel) {
                throw new Error('AI model not found');
            }
            return deletedModel;
        } catch (error) {
            throw new Error('Failed to delete AI model');
        }
    }
}

module.exports = new AIModelingService();
