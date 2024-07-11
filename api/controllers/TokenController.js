const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Paths to the military token dataset files
const militaryTokenDataPath = path.join(__dirname, '../../datasets/military_token_data');

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

// Endpoint to get military token data
router.get('/:fileName', async (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(militaryTokenDataPath, fileName);

    try {
        const data = await readJsonFile(filePath);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: `Failed to load ${fileName}` });
    }
});

// Endpoint to update military token data
router.post('/:fileName', async (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(militaryTokenDataPath, fileName);
    const newData = req.body;

    try {
        await writeJsonFile(filePath, newData);
        res.json({ message: `${fileName} updated successfully` });
    } catch (error) {
        res.status(500).json({ error: `Failed to update ${fileName}` });
    }
});

module.exports = router;
