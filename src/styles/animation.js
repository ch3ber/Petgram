import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

const transformMenuKeyframes = keyframes`
  from {
    transform: scale(.7) translateY(-5rem);
  }
  to {
    transform: scale(.7) translateY(0);
  }
`

export const transformMenu = ({ time = '500ms', type = 'ease-out' } = {}) =>
  css`animation: ${time} ${transformMenuKeyframes} ${type} forwards`
