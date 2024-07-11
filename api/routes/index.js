const express = require('express');
const router = express.Router();

const aiModelingRoutes = require('./ai_modeling');
const datasetRoutes = require('./datasets');
const discountRoutes = require('./discounts');
const governanceRoutes = require('./governance');
const synergyRoutes = require('./synergy');
const tokenRoutes = require('./token');

// Use the routes
router.use('/ai-modeling', aiModelingRoutes);
router.use('/datasets', datasetRoutes);
router.use('/discounts', discountRoutes);
router.use('/governance', governanceRoutes);
router.use('/synergy', synergyRoutes);
router.use('/tokens', tokenRoutes);

module.exports = router;
