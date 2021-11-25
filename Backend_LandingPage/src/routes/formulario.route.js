const router = require('express')();
const formularioController = require('../controllers/formulario.controller');
const formularioSchemaMiddleware = require('../middleware/formulario_schema.middleware');
const formularioDocMiddleware = require('../middleware/formulario_documento.middleware');

router.post('/', formularioSchemaMiddleware ,formularioDocMiddleware ,formularioController);

module.exports = router;