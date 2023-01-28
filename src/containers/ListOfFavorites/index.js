import React from 'react'

import { useGetFavoritesPhoto } from '../../hooks/usePhotos'
import FavGrid from '../../components/FavGrid'
import { Grid, Title } from './style'
import FavGridSkeleton from '../../components/Skeletons/FavGridSkeleton'

const ListOfFavorites = () => {
  const { data, loading } = useGetFavoritesPhoto()
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <>
      <Title> Favorites </Title>
      <Grid>
        {
          loading
            ? array.map(id => (
              <FavGridSkeleton key={id} />
            ))
            : data?.favs.map(photo => (
              <FavGrid key={photo.id} {...photo} />
            ))
        }
      </Grid>
    </>
  )
}

export default ListOfFavorites
