require('./config/config');
const sequelize = require('./config/database');
const express = require('express');
const server = express();

const cors = require('cors');
const helmet = require('helmet');
const logger = require('logger').createLogger('./src/logger/logs.log'); 

const formularioRoute = require('./routes/formulario.route');
const error_handling = require('./middleware/error_handling');

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api',formularioRoute);
server.use(error_handling);


(async ()=> {
    try {
        await sequelize.authenticate();
        if(!module.parent){
            server.listen(process.env.PORT, ()=>{
                logger.info(`Servidor iniciado en el puerto ${process.env.PORT}`);
            });
        }
    } catch (error) {
        logger.info('Se presentó un error al intentar conectarse a la base de datos', error);
    }
})();



module.exports = server;
