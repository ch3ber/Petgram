import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useLoginMutation } from '../container/LoginMutation'

export const NoRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  const [
    loginMutation,
    { data: dataLoading, loading: loadingLogin, error: errorLoading }
  ] = useLoginMutation()

  const onLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorLoginMsg =
    errorLoading && 'La contraseña no es correcta o el usuario no existe.'

  return (
    <>
      <UserForm
        disabled={loadingLogin}
        error={errorLoginMsg}
        title='Iniciar Sesion'
        onSubmit={onLogin}
        isLogin
      />
    </>
  )
}
