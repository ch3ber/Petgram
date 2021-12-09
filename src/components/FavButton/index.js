import React from 'react'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? HiHeart : HiOutlineHeart
  return (
    <Button onClick={onClick}>
      <Icon size='24px' /> {likes} likes
    </Button>
  )
}
