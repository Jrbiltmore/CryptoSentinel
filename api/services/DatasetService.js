const { AIModelingModel, GovernanceModel, MilitaryTokenModel } = require('../models/DatasetModel');

class DatasetService {
    // AI Modeling Services

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

    // Governance Services

    // Create a new governance proposal
    async createGovernanceProposal(data) {
        const newProposal = new GovernanceModel(data);
        try {
            const savedProposal = await newProposal.save();
            return savedProposal;
        } catch (error) {
            throw new Error('Failed to create governance proposal');
        }
    }

    // Get all governance proposals
    async getAllGovernanceProposals() {
        try {
            const proposals = await GovernanceModel.find();
            return proposals;
        } catch (error) {
            throw new Error('Failed to get governance proposals');
        }
    }

    // Get a governance proposal by ID
    async getGovernanceProposalById(id) {
        try {
            const proposal = await GovernanceModel.findById(id);
            if (!proposal) {
                throw new Error('Governance proposal not found');
            }
            return proposal;
        } catch (error) {
            throw new Error('Failed to get governance proposal');
        }
    }

    // Update a governance proposal by ID
    async updateGovernanceProposal(id, data) {
        try {
            const updatedProposal = await GovernanceModel.findByIdAndUpdate(id, data, { new: true });
            if (!updatedProposal) {
                throw new Error('Governance proposal not found');
            }
            return updatedProposal;
        } catch (error) {
            throw new Error('Failed to update governance proposal');
        }
    }

    // Delete a governance proposal by ID
    async deleteGovernanceProposal(id) {
        try {
            const deletedProposal = await GovernanceModel.findByIdAndDelete(id);
            if (!deletedProposal) {
                throw new Error('Governance proposal not found');
            }
            return deletedProposal;
        } catch (error) {
            throw new Error('Failed to delete governance proposal');
        }
    }

    // Military Token Services

    // Create a new military token transaction
    async createMilitaryTokenTransaction(data) {
        const newTransaction = new MilitaryTokenModel(data);
        try {
            const savedTransaction = await newTransaction.save();
            return savedTransaction;
        } catch (error) {
            throw new Error('Failed to create token transaction');
        }
    }

    // Get all military token transactions
    async getAllMilitaryTokenTransactions() {
        try {
            const transactions = await MilitaryTokenModel.find();
            return transactions;
        } catch (error) {
            throw new Error('Failed to get token transactions');
        }
    }

    // Get a military token transaction by ID
    async getMilitaryTokenTransactionById(id) {
        try {
            const transaction = await MilitaryTokenModel.findById(id);
            if (!transaction) {
                throw new Error('Token transaction not found');
            }
            return transaction;
        } catch (error) {
            throw new Error('Failed to get token transaction');
        }
    }

    // Update a military token transaction by ID
    async updateMilitaryTokenTransaction(id, data) {
        try {
            const updatedTransaction = await MilitaryTokenModel.findByIdAndUpdate(id, data, { new: true });
            if (!updatedTransaction) {
                throw new Error('Token transaction not found');
            }
            return updatedTransaction;
        } catch (error) {
            throw new Error('Failed to update token transaction');
        }
    }

    // Delete a military token transaction by ID
    async deleteMilitaryTokenTransaction(id) {
        try {
            const deletedTransaction = await MilitaryTokenModel.findByIdAndDelete(id);
            if (!deletedTransaction) {
                throw new Error('Token transaction not found');
            }
            return deletedTransaction;
        } catch (error) {
            throw new Error('Failed to delete token transaction');
        }
    }
}

module.exports = new DatasetService();
