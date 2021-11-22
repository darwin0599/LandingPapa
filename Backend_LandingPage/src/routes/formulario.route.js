const router = require('express')();
const formularioController = require('../controllers/formulario.controller');

router.post('/', formularioController);

module.exports = router;