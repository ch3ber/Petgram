import React from 'react'
import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const ToggleLikeMutation = ({ children }) => {
  const [mutateFunction, { data, loading, error }] = useMutation(LIKE_PHOTO);
  return <LIKE_PHOTO mutation={}>
    {children}
    </LIKE_PHOTO>
}
