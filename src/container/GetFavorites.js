import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const RenderProp = ({ loading, data, error }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => {
  const { loading, error, data, refetch } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only'
  })
  // useEffect(() => refetch(), [])
  return <RenderProp loading={loading} data={data} error={error} />
}
