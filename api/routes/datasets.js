const express = require('express');
const { AIModelingModel, GovernanceModel, MilitaryTokenModel } = require('../models/DatasetModel');
const router = express.Router();

// AI Modeling Endpoints
router.post('/ai-modeling', async (req, res) => {
    const newModel = new AIModelingModel(req.body);
    try {
        const savedModel = await newModel.save();
        res.json(savedModel);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create AI model' });
    }
});

router.get('/ai-modeling', async (req, res) => {
    try {
        const models = await AIModelingModel.find();
        res.json(models);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get AI models' });
    }
});

router.get('/ai-modeling/:id', async (req, res) => {
    try {
        const model = await AIModelingModel.findById(req.params.id);
        if (!model) {
            return res.status(404).json({ error: 'AI model not found' });
        }
        res.json(model);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get AI model' });
    }
});

router.put('/ai-modeling/:id', async (req, res) => {
    try {
        const updatedModel = await AIModelingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedModel) {
            return res.status(404).json({ error: 'AI model not found' });
        }
        res.json(updatedModel);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update AI model' });
    }
});

router.delete('/ai-modeling/:id', async (req, res) => {
    try {
        const deletedModel = await AIModelingModel.findByIdAndDelete(req.params.id);
        if (!deletedModel) {
            return res.status(404).json({ error: 'AI model not found' });
        }
        res.json({ message: 'AI model deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete AI model' });
    }
});

// Governance Endpoints
router.post('/governance', async (req, res) => {
    const newProposal = new GovernanceModel(req.body);
    try {
        const savedProposal = await newProposal.save();
        res.json(savedProposal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create governance proposal' });
    }
});

router.get('/governance', async (req, res) => {
    try {
        const proposals = await GovernanceModel.find();
        res.json(proposals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get governance proposals' });
    }
});

router.get('/governance/:id', async (req, res) => {
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

router.put('/governance/:id', async (req, res) => {
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

router.delete('/governance/:id', async (req, res) => {
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

// Military Token Endpoints
router.post('/military-token', async (req, res) => {
    const newTokenTransaction = new MilitaryTokenModel(req.body);
    try {
        const savedTokenTransaction = await newTokenTransaction.save();
        res.json(savedTokenTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create token transaction' });
    }
});

router.get('/military-token', async (req, res) => {
    try {
        const transactions = await MilitaryTokenModel.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get token transactions' });
    }
});

router.get('/military-token/:id', async (req, res) => {
    try {
        const transaction = await MilitaryTokenModel.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: 'Token transaction not found' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get token transaction' });
    }
});

router.put('/military-token/:id', async (req, res) => {
    try {
        const updatedTransaction = await MilitaryTokenModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ error: 'Token transaction not found' });
        }
        res.json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update token transaction' });
    }
});

router.delete('/military-token/:id', async (req, res) => {
    try {
        const deletedTransaction = await MilitaryTokenModel.findByIdAndDelete(req.params.id);
        if (!deletedTransaction) {
            return res.status(404).json({ error: 'Token transaction not found' });
        }
        res.json({ message: 'Token transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete token transaction' });
    }
});

module.exports = router;
