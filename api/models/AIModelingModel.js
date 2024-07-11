const mongoose = require('mongoose');

// Define the schema for AI modeling
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

// Create and export the model
const AIModelingModel = mongoose.model('AIModelingModel', aiModelingSchema);
module.exports = AIModelingModel;
