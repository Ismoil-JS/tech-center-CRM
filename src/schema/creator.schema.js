import Joi from 'joi'

export const COURSES_SCHEMA = Joi.object({
    title: Joi.string().max(20).required(),
}).required()

export const GROUPS_SCHEMA = Joi.object({
    group_name: Joi.string().max(20).required(),
    courseID: Joi.number().required(),
}).required()

export const USER_SCHEMA = Joi.object({
    username: Joi.string().max(20).required(),
    password: Joi.string().max(20).required(),
    groupID: Joi.number().required(),
}).required()

export const TASKS_SCHEMA = Joi.object({
    task: Joi.string().required(),
    deadline: Joi.string().max(20).required(),
    group_ID: Joi.number().required(),
}).required()