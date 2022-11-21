import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import Projets from './components/pages/Projets'
import Contact from './components/pages/Contact'
import Inscrivez from './components/pages/Inscrivez';
import Password from './components/pages/Password';
import Conseil from './components/pages/Conseil';

function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
        <Routes>
           <Route path='/' exact element={<Accueil/>}/>
           <Route path='/Projets' element={<Projets/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Conseil' element={<Conseil/>}/>
           <Route path='/Inscrivez' element={<Inscrivez/>}/>
           <Route path='/Password' element={<Password/>}/>


        </Routes>
    </Router>
   </>
  );
}

export default App;

