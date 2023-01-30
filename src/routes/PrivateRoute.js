import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { AppContext } from '@context/AppProvider'
import NotRegisteredUser from '@views/NotRegisteredUser'

export const PrivateRoute = () => {
  const { isAuth: isAuthenticated } = useContext(AppContext)

  return isAuthenticated ? <Outlet /> : <NotRegisteredUser />
}
