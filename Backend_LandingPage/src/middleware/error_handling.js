const logger = require('logger').createLogger('./src/logger/logs.log'); 
module.exports = function (err, req, res, next) {
    res.status(500).json({error: 'Internal error server'});
    logger.fatal(`Error fatal en el servidor: ${err}`);
    
}
