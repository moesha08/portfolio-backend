const Contact = require('../models/Contact');
const createError = require('http-errors');

// Get all contacts
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

// Get contact by ID
const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) throw createError(404, 'Contact not found');

    res.json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

// Create new contact
const createContact = async (req, res, next) => {
  try {
    const { firstname, lastname, email, phone, message } = req.body;

    const contact = new Contact({
      firstname,
      lastname,
      email,
      phone,
      message,
    });

    const saved = await contact.save();

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: saved,
    });
  } catch (error) {
    next(error);
  }
};

// Update a contact
const updateContact = async (req, res, next) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) throw createError(404, 'Contact not found');

    res.json({
      success: true,
      message: 'Contact updated',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a contact
const deleteContact = async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) throw createError(404, 'Contact not found');

    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    next(error);
  }
};

// Delete all contacts
const deleteAllContacts = async (req, res, next) => {
  try {
    await Contact.deleteMany({});
    res.json({ success: true, message: 'All contacts deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts,
};
