import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SumbitButton'

export const User = () => {
  const { removeAtuth } = useContext(Context)
  return (
    <>
      <h2>User</h2>
      <SubmitButton onClick={removeAtuth}>Cerrar sessión</SubmitButton>
    </>
  )
}
