const express = require('express');
const router = express.Router();
const ContactController = require('../Controllers/ContactController');
router.post('/ajouter',ContactController.ajoutercontact);
router.post('/:id/modifier',ContactController.midifiercontact);
router.get('/:id/supprimer',ContactController.supprimercontact);
router.get('/lister',ContactController.listercontact);
module.exports = router; 