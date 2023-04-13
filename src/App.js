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


import TeamE from "./scenes/team/TeamE";
import ProjetP from "./scenes/projet/ProjetP";
import AjoutP from "./scenes/form/AjoutP";
import CalendarE from "./scenes/calendar/indexE";
import DocumentEN from "./scenes/document/DocumentEN"
import Bar from "./scenes/bar/BarE";
import Line from "./scenes/line/LineE";


import TeamU from "./scenes/team/TeamU";
import CreeGoupe from "./scenes/creegroupe/CreeGroupe";
import ProjetCH from "./scenes/projet/ProjetCH";
import AjoutT from "./scenes/form/AjoutT";
import CalendarU from "./scenes/calendar/indexU";
import DocumentE from './scenes/document/DocumentE';
import BarU from "./scenes/bar/BarU";
import LineU from "./scenes/line/LineU";
/*






import FAQ from "./scenes/faq";
*/





function App() {

  return (
    <>
    <Router>
       <Navbar/>
        <Routes>
          
          <Route path="/teamE" element={<TeamE/>} />
           <Route path="/projetP" element={<ProjetP />} />
            <Route path="/ajoutP" element={<AjoutP />} />
             <Route path="/calendarE" element={<CalendarE />} />
             <Route path="/documentEN" element={<DocumentEN />} />
              <Route path="/barE" element={<Bar />} />
              <Route path="/lineE" element={<Line />} />

              <Route path="/teamU" element={<TeamU/>} />
          <Route path="/creeGoupe" element={<CreeGoupe />} />
           <Route path="/projetCH" element={<ProjetCH />} />
            <Route path="/ajoutT" element={<AjoutT />} />
             <Route path="/calendarU" element={<CalendarU />} />
             <Route path="/documentE" element={<DocumentE />} />
              <Route path="/barU" element={<BarU />} />
              <Route path="/lineU" element={<LineU />} />
        {/**   
             
             
             
              
             
            
             */}


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

