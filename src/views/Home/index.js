import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../../containers/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'

const Home = () => {
  const { id: category } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards category={category} />
    </>
  )
}

export default Home
