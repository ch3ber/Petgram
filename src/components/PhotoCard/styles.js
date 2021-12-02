import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Wrapper = styled.article`
  ${fadeIn()}

  box-shadow: 0 4px 5px rgba(0, 0, 0, .2);
  border-radius: .7rem;
  margin: 0 1rem;
  width: calc(100% - 2rem);
  overflow: hidden;
`

export const ImgWrapper = styled.div`
`

export const Img = styled.img`
  width: 100%;
`

export const Button = styled.button`
  margin: .8rem 1rem;
  border: none;
  background-color: transparent;
  color: #3F72AF;
  display: flex;
  align-items: center;
  & svg {
    margin-right: .4rem;
  }
`
