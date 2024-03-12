import { Router } from 'express'
import { ValidationMiddleware } from '../middleware/validation.middleware.js'
import Controller from '../controller/controller.js'
import { STUDENT_SCHEMA } from '../schema/creator.schema.js'

const router = Router()

export default router
    .get('/main', Controller.MAIN_PAGE)
    .post('/task', ValidationMiddleware(STUDENT_SCHEMA), Controller.CREATE_TASK)
    .put('/task/:id', Controller.UPDATE_TASK)
    .delete('/task/:id', Controller.DELETE_TASK)