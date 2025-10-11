const Service = require('../models/Service');
const createError = require('http-errors');

// Get all services
const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    next(error);
  }
};

// Get service by ID
const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      throw createError(404, 'Service not found');
    }
    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    next(error);
  }
};

// Create new service
const createService = async (req, res, next) => {
  try {
    const service = new Service(req.body);
    const savedService = await service.save();
    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: savedService
    });
  } catch (error) {
    next(error);
  }
};

// Update service
const updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!service) {
      throw createError(404, 'Service not found');
    }

    res.json({
      success: true,
      message: 'Service updated successfully',
      data: service
    });
  } catch (error) {
    next(error);
  }
};

// Delete service
const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    
    if (!service) {
      throw createError(404, 'Service not found');
    }

    res.json({
      success: true,
      message: 'Service deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Delete all services
const deleteAllServices = async (req, res, next) => {
  try {
    await Service.deleteMany();
    res.json({
      success: true,
      message: 'All services deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  deleteAllServices
};