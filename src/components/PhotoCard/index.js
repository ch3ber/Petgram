import React from 'react'
import { Article, ImgWrapper, Img, Header, UserImg, Name } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { gql, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const [toggleLike] = useMutation(LIKE_PHOTO)

  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Header>
            <UserImg src={src} />
            <Name>User Name</Name>
          </Header>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} Value must be define`)
    }

    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`)
    }
  }
}
