const mongoose = require('mongoose');

// Define the schema for governance proposals
const governanceSchema = new mongoose.Schema({
  proposalId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  votesFor: {
    type: Number,
    required: true,
  },
  votesAgainst: {
    type: Number,
    required: true,
  },
  votesAbstain: {
    type: Number,
    required: true,
  },
  executionTime: {
    type: Date,
    required: false,
  },
  executedBy: {
    type: String,
    required: false,
  },
  executionTxHash: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

// Create and export the model
const GovernanceModel = mongoose.model('Governance', governanceSchema);
module.exports = GovernanceModel;
