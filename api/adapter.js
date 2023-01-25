import { Low, Memory } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'

const isLocal = !process.env.NOW_REGION
const type = isLocal ? new JSONFileSync('./db.json') : new Memory()

const db = new Low(type)
await db.read()
db.data ||= {}
await db.write()

export default db
