import React from 'react'
import { PhotoCard } from '../PhotoCard'
// import { ListOfPhotoCardSkeleton } from '../Skeletons/ListOfPhotoCardSkeleton'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(id => (
          <PhotoCard key={id} id={id} />
          // <ListOfPhotoCardSkeleton />
        ))
      }
    </ul>
  )
}
