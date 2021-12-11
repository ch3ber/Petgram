import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { useParams } from 'react-router'

export const Detail = () => {
  const params = useParams()
  return (
    <PhotoCardWithQuery id={params.detailId} />
  )
}
