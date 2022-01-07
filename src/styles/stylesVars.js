export const sizes = {
  mobileS: '320px',
  mobileM: '414px',
  mobileL: '576px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1280px',
  desktop: '1536px'
}

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`
}
