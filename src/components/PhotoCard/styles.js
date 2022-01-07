import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'
import { colors } from '../../styles/darkTheme'

export const Article = styled.article`
  background-color: ${colors.backgroundLigth};
  border-radius: 1rem;
  width: calc(100% - 2.5rem);
  overflow: hidden;
`

export const ImgWrapper = styled.div`
  overflow: hidden;
  ${fadeIn()}
`

export const Img = styled.img`
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1.5rem;
  gap: 2rem;
`

export const UserImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  border-radius: 50%;
`

export const Name = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: ${colors.backgroundVeryLight};
`
