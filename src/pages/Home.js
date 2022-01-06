import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet'

export const Home = () => {
  const params = useParams()
  const { pathId } = params

  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta
          name='description'
          content='Con Petgram puedes encontrar fotos animales domésticos muy bonitos'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={pathId} />
    </>
  )
}
