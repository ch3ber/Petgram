import React from 'react'
import { Anchor, Image } from './styles'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, pathId, emoji = '?' }) => (
  <Link to={`/pet/${pathId}`}>
    <Image src={cover} />
    {emoji}
  </Link>
)
