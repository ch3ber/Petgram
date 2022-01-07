import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { colors, primaryGradient, primaryShadow } from '../../styles/darkTheme'
import { sizes } from '../../styles/stylesVars'

export const Nav = styled.nav`
  text-align: center;
  background-color: ${colors.backgroundLigth};
  box-shadow: 0px -3px 15px 0px rgba(142, 146, 158, 0.2);
  border-radius: 2rem 2rem 0 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 6rem;
  width: 100%;
  max-width: ${sizes.mobileL};
  position: fixed;
  bottom: 0;
  z-index: 9;
`
export const Link = styled(LinkRouter)`
  color: ${colors.fonts};
  text-decoration: none;
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center center;

  &[aria-current] {
    color: ${colors.white};
    background-color: ${colors.primary};
    ${primaryGradient}
    ${primaryShadow()}
    padding: 0.5rem;
    border-radius: 1rem;
    position: relative;
  }
`
// &:after {
// ${fadeIn({ tiem: '0.5s' })};
// content: '·';
// position: absolute;
// bottom: -7px;
// left: 0;
// right: 0;
// font-size: 4rem;
// line-height: 2rem;
// }
