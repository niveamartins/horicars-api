import joi from 'joi';
const producerSchema = joi.object(
    {
        name: joi.string().required(),
    });

export default producerSchema;