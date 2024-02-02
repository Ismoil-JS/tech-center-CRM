import Joi from 'joi'

export const AUTH_SCHEMA = Joi.object({
    username: Joi.string().max(20).required().trim(),
    password: Joi.string().max(20).required().trim(),
}).required()
