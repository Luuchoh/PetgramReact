import React from 'react'
import Helmet from '../../components/Helmet'
import ListOfFavorites from '../../containers/ListOfFavorites'

const Favs = () => {
  return (
    <>
      <Helmet title='Favoritos' />
      <ListOfFavorites />
    </>
  )
}

export default Favs
