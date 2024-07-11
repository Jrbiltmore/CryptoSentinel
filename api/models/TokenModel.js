const mongoose = require('mongoose');

// Define the schema for military token data
const tokenSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  tokenId: {
    type: Number,
    required: true,
    unique: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Create and export the model
const TokenModel = mongoose.model('Token', tokenSchema);
module.exports = TokenModel;
