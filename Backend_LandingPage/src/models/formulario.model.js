const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const formulario = sequelize.define('formulario',{
    nombre: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }
},
{   freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

module.exports = formulario;