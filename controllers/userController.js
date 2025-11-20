const User = require('../models/User');
const createError = require('http-errors');

// ----------------------------------
// GET ALL USERS
// ----------------------------------
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
};

// ----------------------------------
// GET USER BY ID
// ----------------------------------
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) throw createError(404, "User not found");

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// ----------------------------------
// CREATE USER
// ----------------------------------
const createUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      throw createError(400, "All fields are required");
    }

    // Create new user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });

  } catch (error) {
    next(error);
  }
};

// ----------------------------------
// UPDATE USER
// ----------------------------------
const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!user) throw createError(404, "User not found");

    res.json({
      success: true,
      message: "User updated successfully",
      data: user
    });

  } catch (error) {
    next(error);
  }
};

// ----------------------------------
// DELETE USER
// ----------------------------------
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) throw createError(404, "User not found");

    res.json({
      success: true,
      message: "User deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

// ----------------------------------
// DELETE ALL USERS
// ----------------------------------
const deleteAllUsers = async (req, res, next) => {
  try {
    await User.deleteMany();
    res.json({
      success: true,
      message: "All users deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
};
