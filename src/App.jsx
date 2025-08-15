import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router'
import Main       from './Main/Main'
import About      from './About/About'
import Portfolio  from './Portfolio/Portfolio'
import Contact    from './Contact/Contact'
import NotFound from './NotFound/NotFound'

const App = () => {

  const router =  createHashRouter(
    [
      { index:true         , element : <Main/> },
      { path:"/home"       , element : <Main/> },
      { path:"/about"      , element : <About/> },
      { path:"/contact"    , element : <Contact/> },
      { path:"/portfolio"  , element : <Portfolio/> },
      { path:"*"           , element : <NotFound/>}
    ]
  );

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
