import React from 'react'
import Helmet from '../../components/Helmet'
import UserProfile from '../../containers/UserProfile'

const User = () => {
  return (
    <>
      <Helmet title='Perfil' />
      <UserProfile />
    </>
  )
}

export default User
