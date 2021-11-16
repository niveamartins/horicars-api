import joi from 'joi';
const actualYear = new Date().getFullYear()
const carSchema = joi.object(
    {
        name: joi.string().required(),
        year: joi.number().integer().greater(1886).less(actualYear).required(),
        producer: joi.number().integer().greater(0).required(),
        category: joi.number().integer().greater(0).required()
    });

export default carSchema;