import { Low, JSONFileSync, Memory } from 'lowdb'

const isLocal = !process.env.NOW_REGION
const type = isLocal ? new JSONFileSync('./db.json') : new Memory()

const db = new Low(type)
db.write()

export default db
