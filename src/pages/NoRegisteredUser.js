import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'
import { useLoginMutation } from '../container/LoginMutation'

export const NoRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  const [
    registerMutation,
    { data: dataRegister, loading: loadingRegister, error: errorRegister }
  ] = useRegisterMutation()
  const [
    loginMutation,
    { data: dataLoading, loading: loadingLogin, error: errorLoading }
  ] = useLoginMutation()

  const onRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const onLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const onSubmitForm = ({ email, password, type }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorRegisterMsg =
    errorRegister && 'El usuario ya existe o hay algun problema.'
  const errorLoginMsg =
    errorLoading && 'La contraseña no es correcta o el usuario no existe.'

  return (
    <>
      <UserForm
        disabled={loadingRegister}
        error={errorRegisterMsg}
        title='Registrarse'
        onSubmit={onRegister}
      />
      <UserForm
        disabled={loadingLogin}
        error={errorLoginMsg}
        title='Iniciar Sesion'
        onSubmit={onLogin}
      />
    </>
  )
}
