const express = require('express');
const AIModelingModel = require('../models/AIModelingModel');
const router = express.Router();

// Endpoint to create a new AI model
router.post('/create', async (req, res) => {
    const newModel = new AIModelingModel(req.body);
    try {
        const savedModel = await newModel.save();
        res.json(savedModel);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create AI model' });
    }
});

// Endpoint to get all AI models
router.get('/all', async (req, res) => {
    try {
        const models = await AIModelingModel.find();
        res.json(models);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get AI models' });
    }
});

// Endpoint to get an AI model by ID
router.get('/:id', async (req, res) => {
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

// Endpoint to update an AI model by ID
router.put('/:id', async (req, res) => {
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

// Endpoint to delete an AI model by ID
router.delete('/:id', async (req, res) => {
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

module.exports = router;
