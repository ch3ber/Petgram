import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { colors } from '../../styles/darkTheme'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`

export const Image = styled.img`
  background: linear-gradient(${colors.background}, ${colors.background})
      padding-box,
    linear-gradient(50deg, ${colors.secondary} 0%, ${colors.terceary} 100%)
      border-box;
  border: 0.25rem solid transparent;

  padding: 0.3rem;
  border-radius: 3rem;
  overflow: hidden;
  object-fit: cover;
  height: 7rem;
  width: 7rem;
  margin-bottom: 0.8rem;
`
