import React from 'react'
import { Button, Img, ImgWrapper } from './style'
import { AiOutlineHeart } from 'react-icons/ai'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_fishes.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <AiOutlineHeart size='32px' /> {likes} likes!
      </Button>
    </article>
  )
}
