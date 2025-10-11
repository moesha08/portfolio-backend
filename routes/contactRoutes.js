const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} = require('../controllers/contactController');

// GET /api/contacts - Get all contacts
router.get('/', getAllContacts);

// GET /api/contacts/:id - Get contact by ID
router.get('/:id', getContactById);

// POST /api/contacts - Create new contact
router.post('/', createContact);

// PUT /api/contacts/:id - Update contact
router.put('/:id', updateContact);

// DELETE /api/contacts/:id - Delete contact
router.delete('/:id', deleteContact);

// DELETE /api/contacts - Delete all contacts
router.delete('/', deleteAllContacts);

module.exports = router;