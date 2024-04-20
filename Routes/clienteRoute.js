const express = require('express');
const router = express.Router();
const {obtener, crear, buscar, editar, eliminar} = require('../Controller/clienteController');

router.get('/clients', obtener);

router.get('/clients/:id', buscar);

router.post('/clients', crear);

router.put('/clients/:id', editar);

router.delete('/clients/:id', eliminar);

module.exports = router;