import React from 'react'
import { Image, Link } from './style'

const FavGrid = ({ id, src }) => {
  return (
    <Link to={`/detailPhoto/${id}`}>
      <Image src={src} />
    </Link>
  )
}

export default FavGrid
