const logger = require('logger').createLogger('./src/logger/logs.log'); 
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

(async ()=> {
    try {
        await sequelize.authenticate();
        logger.info('La conexión a la base de datos ha sido establecida satisfactoriamente');
      } catch (error) {
        logger.info('Se presentó un error al intentar conectarse a la base de datos', error);
    }
})();

module.exports = sequelize;