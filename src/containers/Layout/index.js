import React from 'react'
import { Outlet } from 'react-router-dom'

import { Logo } from '@components/Logo'
import Navbar from '@components/Navbar'
import { Main } from '@containers/Layout/style'

const Layout = () => {
  return (
    <>
      <Logo />
      <Main>
        <Outlet />
      </Main>
      <Navbar />
    </>
  )
}

export default Layout
