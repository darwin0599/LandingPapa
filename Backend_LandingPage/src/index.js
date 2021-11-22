require('./config/config');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const logger = require('logger').createLogger('./src/logger/logs.log'); 
const formularioRoute = require('./routes/formulario.route');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api',formularioRoute);

server.listen(process.env.PORT, ()=>{
    logger.info(`Servidor iniciado en el puerto ${process.env.PORT}`);
});
