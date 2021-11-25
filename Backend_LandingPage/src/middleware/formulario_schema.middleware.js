const formularioSchema = require('../json_schemas/formular.schema');

const formularioMiddleware = async (req,res,next) => {
    try {
        if(await formularioSchema.validateAsync(req.body)){
            next();
        }
    }catch(err){
        res.status(400).json({error: err.details[0].message});
    }
    
}

module.exports = formularioMiddleware;