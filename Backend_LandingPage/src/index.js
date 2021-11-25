require('./config/config');
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

server.listen(process.env.PORT, ()=>{
    logger.info(`Servidor iniciado en el puerto ${process.env.PORT}`);
});

