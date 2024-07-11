const express = require('express');
const SynergyModel = require('../models/SynergyModel');
const router = express.Router();

// Endpoint to create a new synergy project
router.post('/create', async (req, res) => {
    const newSynergy = new SynergyModel(req.body);
    try {
        const savedSynergy = await newSynergy.save();
        res.json(savedSynergy);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create synergy project' });
    }
});

// Endpoint to get all synergy projects
router.get('/all', async (req, res) => {
    try {
        const synergies = await SynergyModel.find();
        res.json(synergies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get synergy projects' });
    }
});

// Endpoint to get a synergy project by ID
router.get('/:id', async (req, res) => {
    try {
        const synergy = await SynergyModel.findById(req.params.id);
        if (!synergy) {
            return res.status(404).json({ error: 'Synergy project not found' });
        }
        res.json(synergy);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get synergy project' });
    }
});

// Endpoint to update a synergy project by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedSynergy = await SynergyModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSynergy) {
            return res.status(404).json({ error: 'Synergy project not found' });
        }
        res.json(updatedSynergy);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update synergy project' });
    }
});

// Endpoint to delete a synergy project by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedSynergy = await SynergyModel.findByIdAndDelete(req.params.id);
        if (!deletedSynergy) {
            return res.status(404).json({ error: 'Synergy project not found' });
        }
        res.json({ message: 'Synergy project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete synergy project' });
    }
});

module.exports = router;
