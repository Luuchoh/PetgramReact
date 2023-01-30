import db from '../adapter.js'
import crypto from 'crypto'
import { v1 as uuidv1 } from 'uuid'
import bcrypt from 'bcrypt'

async function addFav ({ id, photoId }) {
  const user = db.data.users.find(user => user.id === id)
  user.favs.push(photoId)
  db.data.users.find(u => u.id === id ? user : u)
  return await db.write()
  // db.get('users').find({ id }).update('favs', favs => [...favs, photoId]).write()
}

async function removeFav ({ id, photoId }) {
  const user = db.data.users.find(user => user.id === id)
  const positionPhoto = user.favs.indexOf(photoId)
  user.favs.splice(positionPhoto, 1)
  db.data.users.find(u => u.id === id ? user : u)
  return await db.write()
  // db.get('users').find({ id }).update('favs', favs => favs.filter(fav => fav !== photoId)).write()
}

function hasFav ({ id, photoId }) {
  const user = db.data.users.find(user => user.id === id)
  const hasFav = user.favs.includes(photoId)
  return hasFav
}

async function create ({ name, email, password }) {
  const avatarHash = crypto.createHash('md5').update(email).digest('hex')
  const avatar = `https://gravatar.com/avatar/${avatarHash}`

  // Create a user
  const user = {
    id: uuidv1(), // with a unique user id
    password: await bcrypt.hash(password, 10), // with the encrypted password
    favs: [],
    avatar,
    email,
    name
  }

  // Write in db.json
  db.data
    .users
    .push(user)

  await db.write()

  return user
}

function find ({ email }) {
  return db.data.users.find(user => user.email === email)
}

const userModel = { create, addFav, hasFav, removeFav, find }

export default userModel
