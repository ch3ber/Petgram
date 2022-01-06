import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { useParams } from 'react-router'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const params = useParams()
  const { detailId } = params
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
