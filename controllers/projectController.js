const Project = require('../models/Project');
const createError = require('http-errors');

// Get all projects
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

// Get project by ID
const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      throw createError(404, 'Project not found');
    }
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
};

// Create new project
const createProject = async (req, res, next) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: savedProject
    });
  } catch (error) {
    next(error);
  }
};

// Update project
const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      throw createError(404, 'Project not found');
    }

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    next(error);
  }
};

// Delete project
const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      throw createError(404, 'Project not found');
    }

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Delete all projects
const deleteAllProjects = async (req, res, next) => {
  try {
    await Project.deleteMany();
    res.json({
      success: true,
      message: 'All projects deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects
};