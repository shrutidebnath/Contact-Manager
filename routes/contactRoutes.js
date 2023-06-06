const express = require("express");
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler')
const { getContact, createContact, getContacts, updateContact, deleteContact } = require("../controllers/contactController");


router.route("/").get(getContacts).post(createContact);

router.use(validateToken);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;

