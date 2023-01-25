import React from 'react'
import { Link } from 'react-router-dom'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNwarScreen } from '../../hooks/useNearScreen'
import { useMutationToggleLike } from '../../hooks/usePhotos'
import LikeButton from '../LikeButton'
import { Article, Img, ImgWrapper } from './style'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_fishes.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNwarScreen()
  const [likeAnonymousPhoto] = useMutationToggleLike()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const handleLikeClick = () => {
    !liked && likeAnonymousPhoto({ variables: { input: { id } } })
    setLiked(!liked)
  }

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <Link to={`/detailPhoto/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <LikeButton liked={liked} likes={likes} onClick={handleLikeClick} />
          </>
      }
    </Article>
  )
}
