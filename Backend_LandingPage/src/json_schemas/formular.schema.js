const Joi = require('joi');

const formularioSchema = Joi.object({

    nombre: Joi.string()
            .pattern(/[a-zA-ZÁÉÍÓÚáéíóúñ ]+/)
            .min(6)
            .required(),
    documento: Joi.string()
            .pattern(/[0-9]/)
            .min(6)
            .max(10)
            .required(),

    email: Joi.string()
        .pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        .min(6)
});

module.exports = formularioSchema;
