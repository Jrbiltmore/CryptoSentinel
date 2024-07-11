const SynergyModel = require('../models/SynergyModel');

class SynergyService {
    // Create a new synergy project
    async createSynergyProject(data) {
        const newSynergy = new SynergyModel(data);
        try {
            const savedSynergy = await newSynergy.save();
            return savedSynergy;
        } catch (error) {
            throw new Error('Failed to create synergy project');
        }
    }

    // Get all synergy projects
    async getAllSynergyProjects() {
        try {
            const synergies = await SynergyModel.find();
            return synergies;
        } catch (error) {
            throw new Error('Failed to get synergy projects');
        }
    }

    // Get a synergy project by ID
    async getSynergyProjectById(id) {
        try {
            const synergy = await SynergyModel.findById(id);
            if (!synergy) {
                throw new Error('Synergy project not found');
            }
            return synergy;
        } catch (error) {
            throw new Error('Failed to get synergy project');
        }
    }

    // Update a synergy project by ID
    async updateSynergyProject(id, data) {
        try {
            const updatedSynergy = await SynergyModel.findByIdAndUpdate(id, data, { new: true });
            if (!updatedSynergy) {
                throw new Error('Synergy project not found');
            }
            return updatedSynergy;
        } catch (error) {
            throw new Error('Failed to update synergy project');
        }
    }

    // Delete a synergy project by ID
    async deleteSynergyProject(id) {
        try {
            const deletedSynergy = await SynergyModel.findByIdAndDelete(id);
            if (!deletedSynergy) {
                throw new Error('Synergy project not found');
            }
            return deletedSynergy;
        } catch (error) {
            throw new Error('Failed to delete synergy project');
        }
    }
}

module.exports = new SynergyService();
