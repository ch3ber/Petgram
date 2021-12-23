import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  text-align: center;
  background-color: var(--bgNavBar);
  border-top: .1rem solid #e0e0e0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
`
export const Link = styled(LinkRouter)`
  color: var(--colorFonts);
  text-decoration: none;
  color: #888;

  &[aria-current] {
    color: var(--black);
    position: relative;

    &:after {
      ${fadeIn({ tiem: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: -7px;
      left: 0;
      right: 0;
      font-size: 4rem;
      line-height: 2rem;
     }
  }
`
