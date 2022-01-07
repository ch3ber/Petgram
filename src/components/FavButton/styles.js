import styled from 'styled-components'
import { colors } from '../../styles/darkTheme'

export const Button = styled.button`
  margin: 1.5rem;
  border: none;
  background-color: transparent;
  color: ${colors.fonts};
  display: flex;
  align-items: center;
  & svg {
    margin-right: 0.5rem;
  }
`
