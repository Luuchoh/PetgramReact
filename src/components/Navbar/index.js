import React from 'react'

import { AiFillHeart, AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { Link, Nav } from './style'

const SIZE = '28px'

const Navbar = () => {
  return (
    <Nav>
      <Link to='/'><AiFillHome size={SIZE} /></Link>
      <Link to='/favs'><AiFillHeart size={SIZE} /></Link>
      <Link to='/user'><AiOutlineUser size={SIZE} /></Link>
    </Nav>
  )
}

export default Navbar
