import React from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NoRegisteredUser } from './pages/NoRegisteredUser'
import Context from './Context'

function useAuth () {
  const [authed, setAuthed] = React.useState(false)
  return authed
}

function RequireAuth ({ children, isAuth }) {
  // const { authed } = useAuth()
  return isAuth === true
    ? children
    : <NoRegisteredUser />
}

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
      <Context.Consumer>
        {
           ({ isAuth }) =>
             isAuth
               ? <Routes>
                 <Route exact path='/favs' element={<Favs />} />
                 <Route exact path='/user' element={<User />} />
               </Routes>
               : <Routes>
                 <Route exact path='/favs' element={<NoRegisteredUser />} />
                 <Route exact path='/user' element={<NoRegisteredUser />} />
               </Routes>
        }
      </Context.Consumer>
      <NavBar />
    </BrowserRouter>
  )
}
