import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Ul } from './styles'

import { gql, useQuery } from '@apollo/client'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const ListOfPhotoCardsComponent = ({ categoryId }) => {
  const {
    loading,
    error,
    data = { photos: [] }
  } = useQuery(GET_PHOTOS, { variables: { categoryId: categoryId } })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </Ul>
  )
}

export const ListOfPhotoCards = React.memo(
  ListOfPhotoCardsComponent,
  (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
  }
)
