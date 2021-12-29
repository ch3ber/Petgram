import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'

export const NoRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = ({ email, password })
            const variables = { input }
            registerMutation({ variables }).then(activateAuth)
          }
          return <>
            <UserForm title='Registrarse' onSubmit={onSubmit} />
            <UserForm title='Iniciar Sesion' onSubmit={activateAuth} />
          </>
        }
      }
    </Context.Consumer>
  )
}
