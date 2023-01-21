import React from 'react'
import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './style'

export const ListOfCategoriesSkeleton = () => {
  return (
    <>
      {
        [1, 2, 3, 4, 5, 6].map((position) => (
          <ContainerCategorySkeleton key={position}>
            <CategoryImage />
            <CategoryTitle />
          </ContainerCategorySkeleton>
        ))
      }
    </>
  )
}
