import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About'

import "./App.css"
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { Navbar } from './components/Navbar';
import Error from './pages/Error';


 const App = () => {
  return (
    <>
    {/* <h1>this is the landing page</h1> */}
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App;