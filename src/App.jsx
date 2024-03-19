import { useState } from 'react'
import Navbar from './Components/Navbar'
import Intro from "./Components/Intro/Intro"
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

function App() {
  

  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
