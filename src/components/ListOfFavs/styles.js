import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  border-radius: 1rem;
  overflow: hidden;
  display: inline;
  height: 11vh;
`

export const Grid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`

export const Image = styled.img`
  object-fit: cover;
  height: 11vh;
`
