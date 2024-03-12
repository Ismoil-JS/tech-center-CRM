import Joi from 'joi'

export const STUDENT_SCHEMA = Joi.object({
    task: Joi.string().max(20).required(),
}).required()
