import { readFileCustom } from "../helpers/read-helper.js"
import { writeFileCustom } from "../helpers/write-helper.js"

export default {
    TEACHER_PAGE: (req, res) => {
        const { id } = req.body

        const teacher = readFileCustom('users.json').find(e => e.id === id)
        const teacherGroup = readFileCustom('groups.json').find(e => e.id === teacher.group_ID)
        const courseName = readFileCustom('courses.json').find(e => e.id === teacherGroup.courseID)
        const teacherStudents = readFileCustom('users.json').filter(e => e.group_ID == teacher.group_ID && e.role === 'student')

        res.render('teacher.ejs', { teacher, courseName, teacherGroup, teacherStudents })
    },
    CREATE_TASKS: (req, res) => {
        const { task, deadline, group_ID } = req.body

        const allTasks = readFileCustom('hw.json')

        allTasks.push({
            id: allTasks.at(-1)?.id + 1 || 1,
            task,
            deadline,
            group_ID
        })

        writeFileCustom('hw.json', allTasks)

        res.redirect('/api/teacher')
    },
}
