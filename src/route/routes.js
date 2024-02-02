import { Router } from 'express'
import { ValidationMiddleware } from '../middleware/validation.middleware.js'
import { AUTH_SCHEMA } from '../schema/auth.schema.js'
import AuthController from '../controller/auth.js'
import AdminController from '../controller/admin.controller.js'
import StudentController from '../controller/student.controller.js'
import TeacherController from '../controller/teacher.controller.js'
import { accessMiddleware } from '../middleware/cookie-handler.middleware.js'
import { COURSES_SCHEMA, GROUPS_SCHEMA, USER_SCHEMA, TASKS_SCHEMA } from '../schema/creator.schema.js'

const router = Router()

export default router
    .get('/sign-in', AuthController.LOGIN_PAGE)
    .get('/admin', accessMiddleware, AdminController.ADMIN_PAGE)
    .get('/teacher', accessMiddleware, TeacherController.TEACHER_PAGE)
    .get('/student', accessMiddleware, StudentController.STUDENT_PAGE)
    .post('/courses', ValidationMiddleware(COURSES_SCHEMA), AdminController.CREATE_COURSES)
    .post('/groups', ValidationMiddleware(GROUPS_SCHEMA), AdminController.CREATE_GROUPS)
    .post('/teacher', ValidationMiddleware(USER_SCHEMA), AdminController.CREATE_TEACHER)
    .post('/student', ValidationMiddleware(USER_SCHEMA), AdminController.CREATE_STUDENT)
    .post('/auth', ValidationMiddleware(AUTH_SCHEMA), AuthController.SIGN_IN)
    .post('/tasks', ValidationMiddleware(TASKS_SCHEMA), TeacherController.CREATE_TASKS)
    .post('/logout', AuthController.LOG_OUT)