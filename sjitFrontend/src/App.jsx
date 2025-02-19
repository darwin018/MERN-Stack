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
import {BrowserRouter,Routes,Route} from 'react-router-dom'

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
          <Route path='/Gallery' element = {<Gallery/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
      
      
    </main>
  )
}

export default App
