const mongoose = require('mongoose');

// Define the schema for discounts
const discountSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },
  discountRate: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
}, {
  timestamps: true,
});

// Create and export the model
const DiscountModel = mongoose.model('Discount', discountSchema);
module.exports = DiscountModel;
