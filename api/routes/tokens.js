const express = require('express');
const TokenModel = require('../models/TokenModel');
const router = express.Router();

// Endpoint to create a new token transaction
router.post('/create', async (req, res) => {
    const newTokenTransaction = new TokenModel(req.body);
    try {
        const savedTokenTransaction = await newTokenTransaction.save();
        res.json(savedTokenTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create token transaction' });
    }
});

// Endpoint to get all token transactions
router.get('/all', async (req, res) => {
    try {
        const transactions = await TokenModel.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get token transactions' });
    }
});

// Endpoint to get a token transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const transaction = await TokenModel.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: 'Token transaction not found' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get token transaction' });
    }
});

// Endpoint to update a token transaction by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTransaction = await TokenModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ error: 'Token transaction not found' });
        }
        res.json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update token transaction' });
    }
});

// Endpoint to delete a token transaction by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTransaction = await TokenModel.findByIdAndDelete(req.params.id);
        if (!deletedTransaction) {
            return res.status(404).json({ error: 'Token transaction not found' });
        }
        res.json({ message: 'Token transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete token transaction' });
    }
});

module.exports = router;
