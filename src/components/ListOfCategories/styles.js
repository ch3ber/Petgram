import styled, { css } from 'styled-components'
import { transformMenu } from '../../styles/animation'
import { colors } from '../../styles/darkTheme'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 1rem;
  margin: 0;
  margin-top: -3.8rem;
  margin-bottom: 3rem;

  ${(props) =>
    props.fixed &&
    css`
       {
        margin: 0;
        position: fixed;
        top: -20px;
        z-index: 9;
        padding: 1.5rem;
        border-radius: 0 0 4rem 4rem;
        background-color: ${colors.background};
        opacity: 0.9;
        ${transformMenu()}
      }
    `}
`

export const Item = styled.li`
  padding: 0 0.5rem;
`
