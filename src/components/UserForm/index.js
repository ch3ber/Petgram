import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { H2, Form, Input, Button } from './styles'

export const UserForm = ({ onSubmit, title }) => {
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
      <H2>{title}</H2>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button type='submit'>{title}</Button>
      </Form>
    </>
  )
}
