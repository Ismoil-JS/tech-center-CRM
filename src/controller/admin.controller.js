import e from "express"
import { readFileCustom } from "../helpers/read-helper.js"
import { writeFileCustom } from "../helpers/write-helper.js"

export default {
    ADMIN_PAGE: (req, res) => {
        const { id } = req.body

        const admin = readFileCustom('users.json').find(e => e.id === id)
        const allCourses = readFileCustom('courses.json')
        const allGroups = readFileCustom('groups.json')
        res.render('admin.ejs', { allCourses, allGroups, admin })
    },
    CREATE_COURSES: (req, res) => {
        const { title } = req.body

        const allCourses = readFileCustom('courses.json')

        if (allCourses.find(course => course.title == title)) {
            return res.status(400).json({
                message: "Course already exists"
            })
        } else {
            allCourses.push({
                id: allCourses.at(-1)?.id + 1 || 1,
                title
            })

            writeFileCustom('courses.json', allCourses)

            res.redirect('/api/admin')
        }
    },
    CREATE_GROUPS: (req, res) => {
        const { group_name, courseID } = req.body

        const allGroups = readFileCustom('groups.json')

        if (allGroups.find(group => group.group_name == group_name)) {
            return res.status(400).json({
                message: "Group already exists"
            })
        } else {
            allGroups.push({
                id: allGroups.at(-1)?.id + 1 || 1,
                group_name,
                courseID: Number(courseID)
            })

            writeFileCustom('groups.json', allGroups)

            res.redirect('/api/admin')
        }
    },
    CREATE_TEACHER: (req, res) => {
        const { username, password, groupID } = req.body

        const allUsers = readFileCustom('users.json')

        if (allUsers.find(user => user.username == username && user.password == password)) {
            return res.status(400).json({
                message: "User already exists"
            })
        } else if (allUsers.find(user => user.group_ID == groupID)) {
            return res.status(400).json({
                message: "Group already has a teacher"
            })
        }
        else {
            allUsers.push({
                id: allUsers.at(-1)?.id + 1 || 1,
                username,
                password,
                group_ID: Number(groupID),
                role: 'teacher'
            })

            writeFileCustom('users.json', allUsers)

            res.redirect('/api/admin')
        }
    },
    CREATE_STUDENT: (req, res) => {
        const { username, password, groupID } = req.body

        const allUsers = readFileCustom('users.json')

        if (allUsers.find(user => user.username == username && user.password == password)) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        else {
            allUsers.push({
                id: allUsers.at(-1)?.id + 1 || 1,
                username,
                password,
                group_ID: Number(groupID),
                role: 'student'
            })

            writeFileCustom('users.json', allUsers)

            res.redirect('/api/admin')
        }
    },
}
