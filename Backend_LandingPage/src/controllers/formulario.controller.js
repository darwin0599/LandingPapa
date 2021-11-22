const logger = require('logger').createLogger('./src/logger/logs.log'); 
const formularioModel = require('../models/formulario.model');

const guardarFormulario = async(req,res) => {
    const dataForm = req.body;
    await formularioModel.create(dataForm);
    logger.info(`Datos recibidos y guardados: ${dataForm.nombre}, ${dataForm.documento}, ${dataForm.email}`)
    res.status(201).json('Formulario creado');
}

module.exports = guardarFormulario;