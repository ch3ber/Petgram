export const colors = {
  white: '#efefef',
  black: '#1c1c1c',
  fonts: '#6A688D',
  background: '#1c1d28',
  backgroundLigth: '#282735',
  backgroundVeryLight: '#8e929e',
  primary: '#4b3bdc',
  secondary: '#fb8018',
  terceary: '#c92fb1'
}

export const primaryGradient = `
  background: -moz-linear-gradient(225deg, rgba(75,59,220,1) 0%, rgba(112,99,227,1) 100%);
  background: -webkit-linear-gradient(225deg, rgba(75,59,220,1) 0%, rgba(112,99,227,1) 100%);
  background: linear-gradient(225deg, rgba(75,59,220,1) 0%, rgba(112,99,227,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4b3bdc",endColorstr="#7063e3",GradientType=1);
`

export const primaryShadow = (spread = 1) => {
  return `box-shadow: 0px 0px 15px ${spread}px rgba(112, 99, 227, 0.3);`
}
