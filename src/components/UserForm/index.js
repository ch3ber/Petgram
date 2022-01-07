import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { H2, Form, Input, Error, Container, Link } from './styles'
import { SubmitButton } from '../SumbitButton'

export const UserForm = ({ error, disabled, onSubmit, title, isLogin }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  const [validEmail, setValidEmail] = useState(true)

  const emailValidation = (event) => {
    const email = event.target.value

    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (emailRegex.test(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  return (
    <>
      <Container>
        <Form disabled={disabled} onSubmit={handleSubmit}>
          <H2>{title}</H2>
          <Input
            onInput={emailValidation}
            disabled={disabled}
            placeholder='Email'
            {...email}
          />
          {validEmail ? '' : <Error>El Email no es valido</Error>}
          <Input placeholder='Password' type='password' {...password} />
          <SubmitButton disabled={disabled} type='submit'>
            {title}
          </SubmitButton>
        </Form>
        {error && <Error>{error}</Error>}
        {isLogin
          ? (
            <p>
              No tienes Cuenta? <Link to='/register'>Crea una cuenta</Link>
            </p>
            )
          : (
            <p>
              Ya tienes Cuenta? <Link to='/login'>Inicia sesion</Link>
            </p>
            )}
      </Container>
    </>
  )
}
