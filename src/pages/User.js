import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SumbitButton'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAtuth } = useContext(Context)
  return (
    <Layout title='User'>
      <SubmitButton onClick={removeAtuth}>Cerrar sessión</SubmitButton>
    </Layout>
  )
}
