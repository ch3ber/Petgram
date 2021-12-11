import React from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Detail } from './pages/Detail'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pet/:pathId' element={<Home />} />
        <Route exact path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
