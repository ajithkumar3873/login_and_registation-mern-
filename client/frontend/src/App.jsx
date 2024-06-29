import { useState } from 'react'
import Signup from './assets/Signup'
import Login from './assets/Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Group1 from './assets/Group1';
import Group2 from './assets/Group2';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Feedback from './assets/pages/Feedback';

function App() {
  
  
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/group1' element={<Group1 />}></Route>
        <Route path='/group2' element={<Group2 />}></Route>

        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/feedback' element={<Feedback />}></Route>
      </Routes>
      
      </BrowserRouter>
  
    </>
  )
}

export default App
