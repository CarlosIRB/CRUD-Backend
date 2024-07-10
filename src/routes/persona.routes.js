const express = require('express');
const PersonaController = require('../controllers/persona.controller');
const router = express.Router();

router.get('/personas', PersonaController.getAll);
router.get('/personas/:id', PersonaController.getById);
router.post('/personas', PersonaController.create);
router.put('/personas/:id', PersonaController.update);
router.delete('/personas/:id', PersonaController.delete);
router.get('/revisar-conexion', PersonaController.checkConnection);

module.exports = router;