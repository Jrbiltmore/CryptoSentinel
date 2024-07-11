const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Paths to the governance dataset files
const executionResultsPath = path.join(__dirname, '../../datasets/governance_data/execution_results.json');
const votingDataPath = path.join(__dirname, '../../datasets/governance_data/voting_data.json');

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

// Helper function to write JSON file
const writeJsonFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

// Endpoint to get execution results
router.get('/execution-results', async (req, res) => {
    try {
        const executionResults = await readJsonFile(executionResultsPath);
        res.json(executionResults);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load execution results' });
    }
});

// Endpoint to update execution results
router.post('/execution-results', async (req, res) => {
    const newExecutionResults = req.body;

    try {
        await writeJsonFile(executionResultsPath, newExecutionResults);
        res.json({ message: 'Execution results updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update execution results' });
    }
});

// Endpoint to get voting data
router.get('/voting-data', async (req, res) => {
    try {
        const votingData = await readJsonFile(votingDataPath);
        res.json(votingData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load voting data' });
    }
});

// Endpoint to update voting data
router.post('/voting-data', async (req, res) => {
    const newVotingData = req.body;

    try {
        await writeJsonFile(votingDataPath, newVotingData);
        res.json({ message: 'Voting data updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update voting data' });
    }
});

module.exports = router;
