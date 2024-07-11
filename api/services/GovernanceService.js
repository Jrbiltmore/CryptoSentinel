const GovernanceModel = require('../models/GovernanceModel');

class GovernanceService {
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
}

module.exports = new GovernanceService();
