const express = require('express');
const GovernanceModel = require('../models/GovernanceModel');
const router = express.Router();

// Endpoint to create a new governance proposal
router.post('/create', async (req, res) => {
    const newProposal = new GovernanceModel(req.body);
    try {
        const savedProposal = await newProposal.save();
        res.json(savedProposal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create governance proposal' });
    }
});

// Endpoint to get all governance proposals
router.get('/all', async (req, res) => {
    try {
        const proposals = await GovernanceModel.find();
        res.json(proposals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get governance proposals' });
    }
});

// Endpoint to get a governance proposal by ID
router.get('/:id', async (req, res) => {
    try {
        const proposal = await GovernanceModel.findById(req.params.id);
        if (!proposal) {
            return res.status(404).json({ error: 'Governance proposal not found' });
        }
        res.json(proposal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get governance proposal' });
    }
});

// Endpoint to update a governance proposal by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedProposal = await GovernanceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProposal) {
            return res.status(404).json({ error: 'Governance proposal not found' });
        }
        res.json(updatedProposal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update governance proposal' });
    }
});

// Endpoint to delete a governance proposal by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProposal = await GovernanceModel.findByIdAndDelete(req.params.id);
        if (!deletedProposal) {
            return res.status(404).json({ error: 'Governance proposal not found' });
        }
        res.json({ message: 'Governance proposal deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete governance proposal' });
    }
});

module.exports = router;
