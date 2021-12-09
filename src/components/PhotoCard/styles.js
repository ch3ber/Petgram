import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 30rem;
  background-color: var(--white);
  box-shadow: 0px 7px 15px 0px rgba(30,30,30,0.1);
  -webkit-box-shadow: 0px 7px 15px 0px rgba(30,30,30,0.1);
  -moz-box-shadow: 0px 7px 15px 0px rgba(30,30,30,0.1);
  border-radius: 2.5rem;
  margin: 0 1rem;
  width: calc(100% - 3rem);
  overflow: hidden;
`

export const ImgWrapper = styled.div`
  ${fadeIn()}
  border-radius: 2.5rem;
  overflow: hidden;
  margin: .8rem;
`

export const Img = styled.img`
  width: 100%;
`
