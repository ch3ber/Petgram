import React, { useContext, Suspense } from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { NoRegisteredUser } from './pages/NoRegisteredUser'
import { NotFound } from './pages/NotFound'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pet/:pathId' element={<Home />} />
          <Route exact path='/detail/:detailId' element={<Detail />} />
          <Route
            exact
            path='/favs'
            element={isAuth ? <Favs /> : <Navigate replace to='/login' />}
          />
          <Route
            exact
            path='/user'
            element={isAuth ? <User /> : <Navigate replace to='/login' />}
          />
          <Route
            exact
            path='/login'
            element={
              !isAuth ? <NoRegisteredUser /> : <Navigate replace to='/' />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  )
}
