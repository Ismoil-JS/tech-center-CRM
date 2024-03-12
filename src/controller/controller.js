import { readFileCustom } from "../utils/read-helper.js"
import { writeFileCustom } from "../utils/write-helper.js"

export default {
    MAIN_PAGE: (_, res) => {
        const allTasks = readFileCustom('memory.json')
        res.render('todo.ejs', { allTasks })
    },
    CREATE_TASK: (req, res) => {
        const { task } = req.body

        const allTasks = readFileCustom('memory.json')

        if (allTasks.find(task => task.task == task)) {
            return res.status(400).json({
                message: "Task already exists"
            })
        } else {
            allTasks.push({
                id: allTasks.at(-1)?.id + 1 || 1,
                task
            })

            writeFileCustom('memory.json', allTasks)

            res.redirect('/api/main')
        }
    },
    UPDATE_TASK: (req, res) => {
        const { id } = req.params
        const { task } = req.body

        if (!task) {
            return res.status(400).json({ message: "Task content is required to update" });
        }

        const allTasks = readFileCustom('memory.json')

        const taskIndex = allTasks.findIndex(task => task.id == +id)

        if (taskIndex == -1) {
            return res.status(404).json({
                message: "Task not found"
            })
        } else {
            allTasks[taskIndex] = {
                id: +id,
                task
            }

            writeFileCustom('memory.json', allTasks)

            res.redirect('/api/main');
        }
    },

    DELETE_TASK: (req, res) => {
        const { id } = req.params

        const allTasks = readFileCustom('memory.json')

        const taskIndex = allTasks.findIndex(task => task.id == id)

        if (taskIndex == -1) {
            return res.status(404).json({
                message: "Task not found"
            })
        } else {
            allTasks.splice(taskIndex, 1)

            writeFileCustom('memory.json', allTasks)

            res.redirect('/api/main')
        }
    }
}
