import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Wrapper = styled.article`
  ${fadeIn()}

  background-color: #FFFFFF;
  box-shadow: 0px 7px 15px 0px rgba(30,30,30,0.1);
  -webkit-box-shadow: 0px 7px 15px 0px rgba(30,30,30,0.1);
  -moz-box-shadow: 0px 7px 15px 0px rgba(30,30,30,0.1);
  border-radius: 2.5rem;
  margin: 0 1rem;
  width: calc(100% - 3rem);
  overflow: hidden;
`

export const ImgWrapper = styled.div`
`

export const Img = styled.img`
  padding: .8rem;
  border-radius: 2.5rem;
  width: 100%;
`

export const Button = styled.button`
  margin: 0 3rem;
  margin-bottom: .8rem;
  border: none;
  background-color: transparent;
  color: #191B1C;
  display: flex;
  align-items: center;
  & svg {
    margin-right: .4rem;
  }
`
