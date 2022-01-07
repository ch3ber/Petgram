import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'

export const Register = () => {
  const { activateAuth } = useContext(Context)

  const [
    registerMutation,
    { data: dataRegister, loading: loadingRegister, error: errorRegister }
  ] = useRegisterMutation()

  const onRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const errorRegisterMsg =
    errorRegister && 'El usuario ya existe o hay algun problema.'
  return (
    <UserForm
      disabled={loadingRegister}
      error={errorRegisterMsg}
      title='Registrarse'
      onSubmit={onRegister}
      isLogin={false}
    />
  )
}
