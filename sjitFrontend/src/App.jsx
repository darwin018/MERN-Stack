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
import Login from './components/functionalComponents/Login.jsx'
import UseEffectApi from './components/functionalComponents/Hooks/UseEffectApi.jsx'
import UseRef from './components/functionalComponents/Hooks/UseRef.jsx'
import UseMemo from './components/functionalComponents/Hooks/UseMemo.jsx'
import UseCallback from './components/functionalComponents/Hooks/UseCallback.jsx'
import UseMemoize from './components/functionalComponents/Hooks/UseMemoize.jsx'
import Hoc from './components/functionalComponents/HoC/Hoc.jsx'
import Memo from './components/functionalComponents/memoization/Memo.jsx'
import LazyLoadingAndSuspense from './components/functionalComponents/memoization/LazyLoadingAndSuspense.jsx'
import CoE from './components/functionalComponents/CoE.jsx'
// import StudentResults from './components/functionalComponents/ContextAPI/StudentResults.jsx'

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
          <Route path='/Login' element = {<Login/>}></Route>
          <Route path='/UseEffectApi' element = {<UseEffectApi/>}></Route>
          <Route path='/UseRef' element = {<UseRef/>}></Route>
          <Route path='/UseMemo' element = {<UseMemo/>}></Route>
          <Route path='/UseCallback' element = {<UseCallback/>}></Route>
          <Route path='/UseMemoize' element = {<UseMemoize/>}></Route>
          <Route path='/Hoc' element = {<Hoc/>}></Route>
          <Route path='/Memo' element = {<Memo/>}></Route>
          <Route path='/LazyLoadingAndSuspense' element = {<LazyLoadingAndSuspense/>}></Route>
          <Route path='/res' element = {<CoE />}></Route>
        </Routes>
      </BrowserRouter>
      
      
      
      
    </main>
  )
}

export default App
