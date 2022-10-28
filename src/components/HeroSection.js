import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      
      <img src='images/logoM.jpg' alt='logo'autoPlay loop muted/>
      <h1>COMMENCER VOTRE PFE</h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
           INSCRIVEZ-VOUS
        </Button>
        
        <Button2 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
          CONECTEZ-VOUS 
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;