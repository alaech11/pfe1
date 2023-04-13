/*import React from "react";*/
import '../../App.css'
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';



export default function Inscrivez(){
    return  (
    
    <div className='cards'>
   
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/prof.jpg'
            text='Enseignat'
            path='/ajouteprof'
          />
          <CardItem
            src='images/etud.jpg'
            text='Etudiant'
            path='/ajoutetud'
          />
        </ul>
       
      </div>
    </div>
  
  )
}
