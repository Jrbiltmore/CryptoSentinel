const express = require('express');
const { check, validationResult } = require('express-validator');
const DiscountModel = require('../models/DiscountModel');
const router = express.Router();

// Endpoint to get all discounted addresses
router.get('/', async (req, res) => {
    try {
        const discounts = await DiscountModel.find();
        res.json(discounts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load discounts' });
    }
});

// Endpoint to add a discounted address
router.post(
    '/',
    [
        check('address').isString().withMessage('Address must be a string'),
        check('discountRate').isInt({ min: 1, max: 100 }).withMessage('Discount rate must be an integer between 1 and 100')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { address, discountRate } = req.body;

        try {
            const discount = new DiscountModel({ address, discountRate });
            const savedDiscount = await discount.save();
            res.json(savedDiscount);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add discount' });
        }
    }
);

// Endpoint to revoke a discount for an address
router.delete('/:address', async (req, res) => {
    const { address } = req.params;

    try {
        const deletedDiscount = await DiscountModel.findOneAndDelete({ address });
        if (!deletedDiscount) {
            return res.status(404).json({ error: `No discount found for address ${address}` });
        }
        res.json({ message: `Discount revoked for address ${address}` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to revoke discount' });
    }
});

// Endpoint to get discount rate for a specific address
router.get('/:address', async (req, res) => {
    const { address } = req.params;

    try {
        const discount = await DiscountModel.findOne({ address });
        if (!discount) {
            return res.status(404).json({ error: `No discount found for address ${address}` });
        }
        res.json(discount);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get discount' });
    }
});

module.exports = router;
