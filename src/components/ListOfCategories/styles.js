import styled, { css } from 'styled-components'
import { transformMenu } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 1.3rem .5rem;
  padding-bottom: 3.5rem;
  margin: 0;
  margin-top: -3.8rem;

  ${props => props.fixed && css`
  {
      margin: 0;
      position: fixed;
      top: -20px;
      z-index: 9;
      padding: 1.5rem;
      border-radius: 0 0 4rem 4rem;
      background-color: var(--bgColor);
      box-shadow: 0px 7px 15px 0px rgba(80, 80, 80, 0.1);
      -webkit-box-shadow: 0px 7px 15px 0px rgba(80, 80, 80, 0.1);
      -moz-box-shadow: 0px 7px 15px 0px rgba(80, 80, 80, 0.1);
      opacity: 0.9;
      ${transformMenu()}
    }`
  }
`

// F4F5FA
export const Item = styled.li`
  padding: 0 .5rem;
`
