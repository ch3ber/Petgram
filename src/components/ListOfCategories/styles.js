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
    &.fixed {
     position: fixed;
     top: 0;
     z-index: 1;
     padding: 1.5rem;
     padding-top: 3rem;
     border-radius: 0 0 4rem 4rem;
     background-color: var(--bgColor);
     box-shadow: 0px 7px 15px 0px rgba(80,80,80,0.1);
     -webkit-box-shadow: 0px 7px 15px 0px rgba(80,80,80,0.1);
     -moz-box-shadow: 0px 7px 15px 0px rgba(80,80,80,0.1);
     opacity: .9;
     ${transformMenu()}
    }
  `}
`

// F4F5FA
export const Item = styled.li`
  padding: 0 .5rem;
`
