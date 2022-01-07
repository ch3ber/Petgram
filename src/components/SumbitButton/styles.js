import styled from 'styled-components'
import { colors, primaryGradient } from '../../styles/darkTheme'

export const Button = styled.button`
  margin: 1rem;
  border: none;
  color: ${colors.white};
  ${primaryGradient}
  border-radius: 5px;
  padding: 1rem 2rem;
  width: 100%;
  opacity: 1;
  transition: opacity 400ms ease;
  outline: 2px solid transparent;

  &:focus {
    outline: 2px solid ${colors.primary};
  }

  &:hover {
    opacity: 0.8;
  }
`
