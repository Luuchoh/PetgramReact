import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import DetailPhoto from '../views/DetailPhoto'
import Home from '../views/Home'
import { Logo } from '../components/Logo'
import GlobalStyles from '../styles/globalStyles'

export default function App () {
  return (
    <>
      <GlobalStyles />
      <Router basename='/'>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detailPhoto'>
            <Route path=':id' element={<DetailPhoto />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
