import React from 'react'

import { Link, Image } from '@components/Category/style'

const DEFAULT_IMAGE = ' https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Link to={`/pet/${path}`}>
    <Image src={cover} />
    {emoji}
  </Link>
)
