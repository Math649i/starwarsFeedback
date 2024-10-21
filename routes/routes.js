const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController');

// GET-anmodning til at hente alle karakterer
router.get('/characters', charactersController.getCharacters);

// POST-anmodning til at tilføje en ny karakter
router.post('/characters', charactersController.addCharacter);

module.exports = router;
