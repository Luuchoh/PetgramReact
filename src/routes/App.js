import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import DetailPhoto from '../views/DetailPhoto'
import Home from '../views/Home'
import { Logo } from '../components/Logo'
import GlobalStyles from '../styles/globalStyles'
import Navbar from '../components/Navbar'
import Favs from '../views/Favs'
import User from '../views/User'
import NotRegisteredUser from '../views/NotRegisteredUser'

const PrivateRoute = ({ auth: isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to='/notresgistered' replace />
}

export default function App () {
  return (
    <>
      <GlobalStyles />
      <Router basename='/'>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/pet/:id' />
          </Route>
          <Route path='/detailPhoto/:id' element={<DetailPhoto />} />
          <Route path='/notresgistered' element={<NotRegisteredUser />} />
          <Route element={<PrivateRoute auth={false} />}>
            <Route path='/favs' element={<Favs />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}
