import db from '../adapter.js'

function find ({ id, favs = [] }) {
  const photo = db.data.photos.find(photo => photo.id === +id)
  return {
    ...photo,
    liked: favs.includes(id.toString())
  }
}

async function addLike ({ id }) {
  const photo = db.data.photos.find(photo => photo.id === +id)
  photo.likes += 1
  db.data.photos.map(p => p.id === +id ? photo : p)
  return await db.write()
}

async function removeLike ({ id }) {
  const photo = db.data.photos.find(photo => photo.id === +id)
  photo.likes -= 1
  db.data.photos.map(p => p.id === +id ? photo : p)
  return await db.write()
}

function list ({ categoryId, ids, favs = [] }) {
  console.log(categoryId)
  let photos
  if (categoryId && categoryId !== 'all') {
    photos = db.data.photos.filter(photo => photo.categoryId === +categoryId)
  } else if (ids) {
    photos = db.data.photos.filter(photo => ids.includes(photo.id.toString()))
  } else {
    photos = db.data.photos
  }

  return photos.map(photo => ({
    ...photo,
    liked: favs.includes(photo.id.toString())
  }))
}

const photosModel = { find, addLike, removeLike, list }
export default photosModel
