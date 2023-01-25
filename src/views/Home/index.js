import React from 'react'
import { ListOfCategories } from '../../containers/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'

const Home = () => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default Home
