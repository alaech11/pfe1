import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import Projets from './components/pages/Projets'
//import Contact from './components/pages/Contact'
import Inscrivez from './components/pages/Inscrivez';
import Password from './components/pages/Password';
import Conseil from './components/pages/Conseil';
import User from './components/pages/User';
import Enseignant from './components/pages/Enseignant';
import Forget from './components/pages/Forget';
import Postuler from './components/pages/Postuler';
import Description from './components/pages/Description';




function App() {

  return (
    <>
    
    <Router>
      <Navbar/>
        <Routes>
           <Route path='/' exact element={<Accueil/>}/>
           <Route path='/Projets' element={<Projets/>}/>
           {/*<Route path='/Contact' element={<Contact/>}/>*/}
           <Route path='/Conseil' element={<Conseil/>}/>
           <Route path='/Inscrivez' element={<Inscrivez/>}/>
           <Route path='/Forget' element={<Forget/>}/>
           <Route path='/Password' element={<Password/>}/>
           <Route path='/User' element={<User/>}/>
           <Route path='/Enseignant' element={<Enseignant/>}/>
           <Route path='/Postuler'  element={<Postuler/>}/>
           <Route path='/Description' element={<Description/>}/>


        </Routes>
    </Router>
   </>
  );
}

export default App;

