import fs from 'fs'
import { join } from 'path'

export const readFileCustom = path => JSON.parse(fs.readFileSync(join(process.cwd(), 'src', 'model', path)))
