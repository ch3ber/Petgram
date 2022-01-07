import React from 'react'
import { Nav, Link } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { HiHome } from 'react-icons/hi'
import { FiUser } from 'react-icons/fi'

export const NavBar = () => {
  const SIZE = '28px'

  return (
    <Nav>
      <Link to='/'>
        <HiHome size={SIZE} />
      </Link>
      <Link to='/favs'>
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link to='/user'>
        <FiUser size={SIZE} />
      </Link>
    </Nav>
  )
}
