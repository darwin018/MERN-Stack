// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './components/functionalComponents/home.jsx'
import About from './components/functionalComponents/About.jsx'
import Gallery from './components/functionalComponents/Gallery.jsx'
import Contact from './components/functionalComponents/Contact.jsx'
// import ClassComponent from './components/classComponent/classComponent.jsx'
import Navbar from './components/functionalComponents/Navbar.jsx'

import UseEffect from './components/functionalComponents/Hooks/UseEffect.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/functionalComponents/Signup.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home properties="Hello" sjit = "SJIT"/>}></Route>
          <Route path='/About' element = {<About/>}></Route>
          <Route path='/Contact' element = {<Contact/>}></Route>
          <Route path='/use-Effect' element = {<UseEffect/>}></Route>
          <Route path='/Gallery' element = {<Gallery/>}></Route>
          <Route path='/Signup' element = {<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
      
      
    </main>
  )
}

export default App
