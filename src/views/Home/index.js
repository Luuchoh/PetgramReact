import React from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '@components/Helmet'
import { ListOfCategories } from '@containers/ListOfCategories'
import { ListOfPhotoCards } from '@containers/ListOfPhotoCards'

const Home = () => {
  const { id: category } = useParams()
  return (
    <>
      <Helmet title='Inicio' />
      <ListOfCategories />
      <ListOfPhotoCards category={category} />
    </>
  )
}

export default Home
