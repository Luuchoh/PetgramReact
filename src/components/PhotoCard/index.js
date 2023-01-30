import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

import { useNearScreen } from '@hooks/useNearScreen'
import { useMutationToggleLike } from '@hooks/usePhotos'
import LikeButton from '@components/LikeButton'
import { Article, ButtonsWrapper, ContainerToggle, Img, ImgWrapper, Toggle, Link as LinkT } from '@components/PhotoCard/style'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_fishes.jpg'

export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const { likePhoto, error } = useMutationToggleLike()

  const handleLikeClick = () => {
    likePhoto({ variables: { input: { id } } })
  }

  const scroll = !!error
  useEffect(() => {
    if (scroll) {
      window.addEventListener('scroll', () => {
        window.scrollTo(0, 0)
      })
    }
  }, [scroll])
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
            {
              error &&
                <ContainerToggle>
                  <Toggle>
                    <AiOutlineQuestionCircle />
                    <h3>Debes Loguearte para dar me gusta</h3>
                    <ButtonsWrapper>
                      <LinkT to='/user'>Iniciar Sesión</LinkT>
                      <LinkT to='/' reloadDocument>Cancelar</LinkT>
                    </ButtonsWrapper>
                  </Toggle>
                </ContainerToggle>
            }
          </>
      }
    </Article>
  )
}
