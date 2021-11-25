const formularioModel = require('../models/formulario.model');

const validarDocumentoUnico = async(req,res,next)=>{
    const {documento} = req.body;
    const documentoEnBD = await formularioModel.findOne({ where: { documento: documento }});
    if(!documentoEnBD){
        next();
        return;
    }
    res.status(409).json({error: `El documento ${documento} ya se encuentra registrado`});
}

module.exports = validarDocumentoUnico;