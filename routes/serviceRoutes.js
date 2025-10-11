const express = require('express');
const router = express.Router();
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  deleteAllServices
} = require('../controllers/serviceController');

// GET /api/services - Get all services
router.get('/', getAllServices);

// GET /api/services/:id - Get service by ID
router.get('/:id', getServiceById);

// POST /api/services - Create new service
router.post('/', createService);

// PUT /api/services/:id - Update service
router.put('/:id', updateService);

// DELETE /api/services/:id - Delete service
router.delete('/:id', deleteService);

// DELETE /api/services - Delete all services
router.delete('/', deleteAllServices);

module.exports = router;