import React from 'react'

import { useGetPhotos } from '../../hooks/usePhotos'
import { PhotoCard } from '../../components/PhotoCard'
import { PhotoCardSkeleton } from '../../components/Skeletons/PhotoCardSkeleton'

export const ListOfPhotoCards = () => {
  const { data, loading } = useGetPhotos()

  return (
    <ul>
      {
        loading
          ? [1, 2, 3].map(id => (
            <PhotoCardSkeleton key={id} />
            ))
          : data?.photos.map(photo => (
            <PhotoCard key={photo.id} {...photo} />
          ))
      }
    </ul>
  )
}
