import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import Projets from './components/pages/Projets'
import Inscrivez from './components/pages/Inscrivez';
import Password from './components/pages/Password';
import Conseil from './components/pages/Conseil';
import AjoutEtud from "../src/components/AjouteEtudiant"
import AjouteProf from './components/AjouteProf';

import Forget from './components/pages/Forget';
import Postuler from './components/pages/Postuler';
import Description from './components/pages/Description';
import Presentation from './components/pages/Presentation';
import Appdash from './Appdash'
import AppdashU from './AppdashU';








function App() {

  return (
    <>

    
    <Router>
       <Navbar/>
        <Routes>
           <Route path='/' exact element={<Accueil/>}/>
           <Route path='/Projets' element={<Projets/>}/>
           <Route path='/Presentation' element={<Presentation/>}/>
           <Route path='/Conseil' element={<Conseil/>}/>
           <Route path='/Inscrivez' element={<Inscrivez/>}/>
           <Route path='/ajoutetud' element={<AjoutEtud/>}/>
           <Route path='/ajouteprof' element={<AjouteProf/>}/>
           <Route path='/Forget' element={<Forget/>}/>
           <Route path='/Password' element={<Password/>}/>
           <Route path='/Appdash/*' element={<Appdash/>}/>
           <Route path='/AppdashU/*' element={<AppdashU/>}/>
           <Route path='/Postuler'  element={<Postuler/>}/>
           <Route path='/Description' element={<Description/>}/>         
        </Routes>
    </Router>
   </>
  );
}

export default App;

