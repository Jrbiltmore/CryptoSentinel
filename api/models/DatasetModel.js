const mongoose = require('mongoose');

// Define the schema for AI modeling dataset
const aiModelingSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trainingData: {
    source: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  modelArchitecture: {
    type: Object,
    required: true,
  },
  trainingParameters: {
    type: Object,
    required: true,
  },
  evaluation: {
    metrics: {
      type: Object,
      required: true,
    },
    results: {
      type: Object,
      required: true,
    },
  },
  deployment: {
    type: Object,
    required: true,
  },
}, {
  timestamps: true,
});

// Define the schema for governance dataset
const governanceSchema = new mongoose.Schema({
  proposalId: {
    type: Number,
    required: true,
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

// Define the schema for military token dataset
const militaryTokenSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  tokenId: {
    type: Number,
    required: true,
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

// Create and export the models
const AIModelingModel = mongoose.model('AIModeling', aiModelingSchema);
const GovernanceModel = mongoose.model('Governance', governanceSchema);
const MilitaryTokenModel = mongoose.model('MilitaryToken', militaryTokenSchema);

module.exports = {
  AIModelingModel,
  GovernanceModel,
  MilitaryTokenModel,
};
