import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { H2, Form, Input, Button, Error } from './styles'

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
        <Button disabled={disabled} type='submit'>
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
