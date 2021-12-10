import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router'

export const Home = () => {
  const params = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.pathId} />
    </>
  )
}
