import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import { Button, Img, ImgWrapper } from '@components/Skeletons/PhotoCardSkeleton/style'

export const PhotoCardSkeleton = () => {
  return (
    <li>
      <ImgWrapper>
        <Img />
      </ImgWrapper>
      <Button>
        <AiOutlineHeart size='32px' /> 0 likes!
      </Button>
    </li>
  )
}
