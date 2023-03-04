import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import Projets from './components/pages/Projets'
import Inscrivez from './components/pages/Inscrivez';
import Password from './components/pages/Password';
import Conseil from './components/pages/Conseil';
import User from './components/pages/User';
import Enseignant from './components/pages/Enseignant';
import Forget from './components/pages/Forget';
import Postuler from './components/pages/Postuler';
import Description from './components/pages/Description';
import Presentation from './components/pages/Presentation';


import TeamE from "./scenes/team/TeamE";
import ContactsE from "./scenes/contacts/ContactsE";
import ProjetP from "./scenes/projet/ProjetP";
import AjoutP from "./scenes/form/AjoutP";
import CalendarE from "./scenes/calendar/indexE";
import Bar from "./scenes/bar/BarE";
import Pie from "./scenes/pie/PieE";
import Line from "./scenes/line/LineE";


import TeamU from "./scenes/team/TeamU";
import ContactsU from "./scenes/contacts/ContactsU";
import ProjetCH from "./scenes/projet/ProjetCH";
import AjoutT from "./scenes/form/AjoutT";
import CalendarU from "./scenes/calendar/indexU";
import BarU from "./scenes/bar/BarU";
import PieU from "./scenes/pie/PieU";
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
          <Route path="/contactsE" element={<ContactsE />} />
           <Route path="/projetP" element={<ProjetP />} />
            <Route path="/ajoutP" element={<AjoutP />} />
             <Route path="/calendarE" element={<CalendarE />} />
              <Route path="/barE" element={<Bar />} />
              <Route path="/pieE" element={<Pie />} /> 
              <Route path="/lineE" element={<Line />} />

              <Route path="/teamU" element={<TeamU/>} />
          <Route path="/contactsU" element={<ContactsU />} />
           <Route path="/projetCH" element={<ProjetCH />} />
            <Route path="/ajoutT" element={<AjoutT />} />
             <Route path="/calendarU" element={<CalendarU />} />
              <Route path="/barU" element={<BarU />} />
              <Route path="/pieU" element={<PieU />} /> 
              <Route path="/lineU" element={<LineU />} />
        {/**   
             
             
             
              
             
              <Route path="/faq" element={<FAQ />} />
             */}


           <Route path='/' exact element={<Accueil/>}/>
           <Route path='/Projets' element={<Projets/>}/>
           <Route path='/Presentation' element={<Presentation/>}/>
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

