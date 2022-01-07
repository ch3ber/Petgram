import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { colors } from '../../styles/darkTheme'

export const H2 = styled.h2`
  align-self: flex-start;
`

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &[disabled] {
    pointer-events: none;
    opacity: 0.3;
  }
`

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  background-color: ${colors.backgroundLigth};
  color: ${colors.white};
  margin: 1.5rem 0;
  padding: 1rem;
  width: 100%;
  outline: 2px solid transparent;

  &:focus {
    outline: 2px solid ${colors.backgroundVeryLight};
  }
`

export const Error = styled.p`
  align-self: flex-start;
  margin: 0;
  font-size: 1.2rem;
  color: ${colors.secondary};
`

export const Container = styled.div`
  padding: 0 5rem;
  display: grid;
  place-items: center center;
  grid-gap: 3rem;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: ${colors.primary};
`
