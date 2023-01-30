import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
// import Layout from '../containers/Layout'
import GlobalStyles from '../styles/globalStyles'

const Layout = React.lazy(() => import('../containers/Layout'))
const Home = React.lazy(() => import('../views/Home'))
const DetailPhoto = React.lazy(() => import('../views/DetailPhoto'))
const NotRegisteredUser = React.lazy(() => import('../views/NotRegisteredUser'))
const Favs = React.lazy(() => import('../views/Favs'))
const User = React.lazy(() => import('../views/User'))

export default function App () {
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
