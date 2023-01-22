import React from 'react'
import { Article, Button, Img, ImgWrapper } from './style'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNwarScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_fishes.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNwarScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? AiFillHeart : AiOutlineHeart

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> {likes} likes!
            </Button>
          </>
      }
    </Article>
  )
}
