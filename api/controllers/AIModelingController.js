const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to the AI modeling data files
const modelConfigPath = path.join(__dirname, '../../datasets/ai_modeling_data/model_config.json');
const testDataPath = path.join(__dirname, '../../datasets/ai_modeling_data/test_data.json');
const trainingDataPath = path.join(__dirname, '../../datasets/ai_modeling_data/training_data.json');

// Helper function to read JSON file
const readJsonFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
};

// Endpoint to get model configuration
router.get('/model-config', async (req, res) => {
    try {
        const modelConfig = await readJsonFile(modelConfigPath);
        res.json(modelConfig);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load model configuration' });
    }
});

// Endpoint to get test data
router.get('/test-data', async (req, res) => {
    try {
        const testData = await readJsonFile(testDataPath);
        res.json(testData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load test data' });
    }
});

// Endpoint to get training data
router.get('/training-data', async (req, res) => {
    try {
        const trainingData = await readJsonFile(trainingDataPath);
        res.json(trainingData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load training data' });
    }
});

// Endpoint to update model configuration
router.post('/model-config', async (req, res) => {
    const newModelConfig = req.body;
    fs.writeFile(modelConfigPath, JSON.stringify(newModelConfig, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update model configuration' });
        }
        res.json({ message: 'Model configuration updated successfully' });
    });
});

module.exports = router;
