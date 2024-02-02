import { readFileCustom } from "../helpers/read-helper.js"
import { writeFileCustom } from "../helpers/write-helper.js"

export default {
    STUDENT_PAGE: (req, res) => {
        const { id } = req.body

        const student = readFileCustom('users.json').find(e => e.id === id)
        const studentGroup = readFileCustom('groups.json').find(e => e.id === student.group_ID)
        const courseName = readFileCustom('courses.json').find(e => e.id === studentGroup.courseID)
        const teacher = readFileCustom('users.json').find(e => e.group_ID === student.group_ID && e.role === 'teacher')
        const tasks = readFileCustom('hw.json').filter(e => e.group_ID === student.group_ID)

        res.render('student.ejs', { student, courseName, studentGroup, teacher, tasks })
    },

}
