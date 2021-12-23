import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`

export const Image = styled.img`
  box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.3);

  background: 
    linear-gradient(var(--bgColor), var(--bgColor)) padding-box,
     linear-gradient(50deg, rgba(78,104,241,1) 0%, rgba(183,209,255,1) 100%) border-box;
  border: .25rem solid transparent;

  padding: .3rem;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 7.5rem;
  width: 7.5rem;
  margin-bottom: .8rem;
`
