const User = require('../models/User');
const createError = require('http-errors');

// ------------------------------
// GET ALL USERS
// ------------------------------
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-__v').sort({ createdAt: -1 });
    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
};

// ------------------------------
// GET USER BY ID
// ------------------------------
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-__v');

    if (!user) {
      throw createError(404, 'User not found');
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// ------------------------------
// CREATE NEW USER (AUTO-GENERATE USERNAME)
// ------------------------------
const createUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email } = req.body;

    if (!firstname || !lastname || !email) {
      throw createError(400, "Firstname, lastname, and email are required");
    }

    // Auto-generate username
    const username =
      `${firstname}.${lastname}`
        .toLowerCase()
        .replace(/\s+/g, '');

    const user = new User({
      username,
      email,
      role: "user"
    });

    const savedUser = await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: savedUser
    });

  } catch (error) {
    next(error);
  }
};

// ------------------------------
// UPDATE USER
// ------------------------------
const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!user) {
      throw createError(404, 'User not found');
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// ------------------------------
// DELETE USER
// ------------------------------
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      throw createError(404, 'User not found');
    }

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// ------------------------------
// DELETE ALL USERS
// ------------------------------
const deleteAllUsers = async (req, res, next) => {
  try {
    await User.deleteMany();

    res.json({
      success: true,
      message: 'All users deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// ------------------------------
// EXPORT CONTROLLER
// ------------------------------
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
};
