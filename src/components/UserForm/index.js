import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { H2, Form, Input, Error } from './styles'
import { SubmitButton } from '../SumbitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <H2>{title}</H2>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled} type='submit'>
          {title}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
