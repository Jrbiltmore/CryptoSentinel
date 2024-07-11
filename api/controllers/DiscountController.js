const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Mock database for discounted addresses
let discountedAddresses = [];

// Endpoint to get all discounted addresses
router.get('/discounts', (req, res) => {
    res.json(discountedAddresses);
});

// Endpoint to add a discounted address
router.post(
    '/discounts',
    [
        check('address').isString().withMessage('Address must be a string'),
        check('discountRate').isInt({ min: 1, max: 100 }).withMessage('Discount rate must be an integer between 1 and 100')
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { address, discountRate } = req.body;
        discountedAddresses.push({ address, discountRate });
        res.json({ message: 'Discount added successfully', address, discountRate });
    }
);

// Endpoint to revoke a discount for an address
router.delete('/discounts/:address', (req, res) => {
    const { address } = req.params;
    discountedAddresses = discountedAddresses.filter(item => item.address !== address);
    res.json({ message: `Discount revoked for address ${address}` });
});

// Endpoint to get discount rate for a specific address
router.get('/discounts/:address', (req, res) => {
    const { address } = req.params;
    const discount = discountedAddresses.find(item => item.address === address);
    if (discount) {
        res.json(discount);
    } else {
        res.status(404).json({ error: `No discount found for address ${address}` });
    }
});

module.exports = router;
