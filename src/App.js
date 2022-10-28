import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Consiel from './components/pages/Consiel';
import Projets from './components/pages/Projets'
import Contact from './components/pages/Contact'
import Inscrivez from './components/pages/Inscrivez';
import Conectez from './components/pages/Conectez';

function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
        <Routes>
           <Route path='/' exact element={<Home/>}/>
           <Route path='/projets' element={<Projets/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/consiel' element={<Consiel/>}/>
           <Route path='/inscrivez' element={<Inscrivez/>}/>
           <Route path='/conectez' element={<Conectez/>}/>


        </Routes>
    </Router>
   </>
  );
}

export default App;

