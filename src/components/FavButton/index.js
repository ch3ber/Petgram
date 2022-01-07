import React from 'react'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? HiHeart : HiOutlineHeart
  return (
    <Button onClick={onClick}>
      <Icon size='24px' /> {likes} likes
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
