const DiscountModel = require('../models/DiscountModel');

class DiscountService {
    // Create a new discount
    async createDiscount(data) {
        const newDiscount = new DiscountModel(data);
        try {
            const savedDiscount = await newDiscount.save();
            return savedDiscount;
        } catch (error) {
            throw new Error('Failed to create discount');
        }
    }

    // Get all discounts
    async getAllDiscounts() {
        try {
            const discounts = await DiscountModel.find();
            return discounts;
        } catch (error) {
            throw new Error('Failed to get discounts');
        }
    }

    // Get discount by address
    async getDiscountByAddress(address) {
        try {
            const discount = await DiscountModel.findOne({ address });
            if (!discount) {
                throw new Error('Discount not found');
            }
            return discount;
        } catch (error) {
            throw new Error('Failed to get discount');
        }
    }

    // Update discount by address
    async updateDiscountByAddress(address, data) {
        try {
            const updatedDiscount = await DiscountModel.findOneAndUpdate({ address }, data, { new: true });
            if (!updatedDiscount) {
                throw new Error('Discount not found');
            }
            return updatedDiscount;
        } catch (error) {
            throw new Error('Failed to update discount');
        }
    }

    // Delete discount by address
    async deleteDiscountByAddress(address) {
        try {
            const deletedDiscount = await DiscountModel.findOneAndDelete({ address });
            if (!deletedDiscount) {
                throw new Error('Discount not found');
            }
            return deletedDiscount;
        } catch (error) {
            throw new Error('Failed to delete discount');
        }
    }
}

module.exports = new DiscountService();
