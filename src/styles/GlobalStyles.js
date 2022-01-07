import { createGlobalStyle } from 'styled-components'
import { colors } from './darkTheme'
import { sizes } from './stylesVars'

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: ${colors.background};
  color: ${colors.fonts};
  height: 100vh;
  font-size: 1.6rem;
  max-width: ${sizes.mobileL};
  width: 100%;
  overscroll-behavior: none;
}

#app {
  overflow-x: hidden;
  min-height: 100vh;
}
`
