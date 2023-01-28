import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import Layout from '../containers/Layout'
import DetailPhoto from '../views/DetailPhoto'
import Home from '../views/Home'
import Favs from '../views/Favs'
import User from '../views/User'
import NotRegisteredUser from '../views/NotRegisteredUser'
import GlobalStyles from '../styles/globalStyles'

export default function App () {
  return (
    <>
      <GlobalStyles />
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            <Route path='/detailPhoto/:id' element={<DetailPhoto />} />
            <Route path='/notresgistered' element={<NotRegisteredUser />} />
            <Route element={<PrivateRoute />}>
              <Route path='/favs' element={<Favs />} />
              <Route path='/user' element={<User />} />
            </Route>

            <Route path='*' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
