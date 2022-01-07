import styled from 'styled-components'
import { colors } from '../../styles/darkTheme'

export const Div = styled.div`
  padding: 3rem;
  display: grid;
  place-items: center center;
`

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${colors.backgroundVeryLight};
  padding-bottom: 0.8rem;
  place-self: center left;
  margin: 0;
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 0.4rem;
  place-self: center left;
  margin: 0;
`
