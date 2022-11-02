import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import Consiel from './components/pages/Consiel';
import Projets from './components/pages/Projets'
import Contact from './components/pages/Contact'
import Inscrivez from './components/pages/Inscrivez';
import Connectez from './components/pages/Connectez';

function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
        <Routes>
           <Route path='/' exact element={<Accueil/>}/>
           <Route path='/Projets' element={<Projets/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Consiel' element={<Consiel/>}/>
           <Route path='/Inscrivez' element={<Inscrivez/>}/>
           <Route path='/Connectez' element={<Connectez/>}/>


        </Routes>
    </Router>
   </>
  );
}

export default App;

