const TokenModel = require('../models/TokenModel');

class TokenService {
    // Create a new token transaction
    async createTokenTransaction(data) {
        const newTransaction = new TokenModel(data);
        try {
            const savedTransaction = await newTransaction.save();
            return savedTransaction;
        } catch (error) {
            throw new Error('Failed to create token transaction');
        }
    }

    // Get all token transactions
    async getAllTokenTransactions() {
        try {
            const transactions = await TokenModel.find();
            return transactions;
        } catch (error) {
            throw new Error('Failed to get token transactions');
        }
    }

    // Get a token transaction by ID
    async getTokenTransactionById(id) {
        try {
            const transaction = await TokenModel.findById(id);
            if (!transaction) {
                throw new Error('Token transaction not found');
            }
            return transaction;
        } catch (error) {
            throw new Error('Failed to get token transaction');
        }
    }

    // Update a token transaction by ID
    async updateTokenTransaction(id, data) {
        try {
            const updatedTransaction = await TokenModel.findByIdAndUpdate(id, data, { new: true });
            if (!updatedTransaction) {
                throw new Error('Token transaction not found');
            }
            return updatedTransaction;
        } catch (error) {
            throw new Error('Failed to update token transaction');
        }
    }

    // Delete a token transaction by ID
    async deleteTokenTransaction(id) {
        try {
            const deletedTransaction = await TokenModel.findByIdAndDelete(id);
            if (!deletedTransaction) {
                throw new Error('Token transaction not found');
            }
            return deletedTransaction;
        } catch (error) {
            throw new Error('Failed to delete token transaction');
        }
    }
}

module.exports = new TokenService();
