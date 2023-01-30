import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetSinglePhoto } from '@hooks/usePhotos'
import { PhotoCard } from '@components/PhotoCard'
import { PhotoCardSkeleton } from '@components/Skeletons/PhotoCardSkeleton'
import Helmet from '@components/Helmet'

const DetailPhoto = () => {
  const { id } = useParams()
  const { data, loading } = useGetSinglePhoto(id)

  return (
    <ul>
      <Helmet title='Detalle' />
      {
        loading
          ? <PhotoCardSkeleton />
          : <PhotoCard key={data?.photo.id} {...data?.photo} />
      }
    </ul>
  )
}

export default DetailPhoto
