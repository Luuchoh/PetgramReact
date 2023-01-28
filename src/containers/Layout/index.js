import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import Navbar from '../../components/Navbar'

const Layout = () => {
  return (
    <>
      <Logo />
      <Outlet />
      <Navbar />
    </>
  )
}

export default Layout
