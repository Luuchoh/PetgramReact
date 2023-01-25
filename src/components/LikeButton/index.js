import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Button } from './style'

const LikeButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? AiFillHeart : AiOutlineHeart
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

export default LikeButton
