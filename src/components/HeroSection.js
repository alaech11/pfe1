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
      
   {/*   <div className='hero-btns'>
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
          CONNECTEZ-VOUS 
        </Button2>
      </div>*/}


<form>
          <div className='form-group mb-3'>
                        <label className='color'> Email </label>
                        <input type="email" name="email2"  placeholder='Entrer votre email'  className='form-control'/>
                        
                         
                      </div>

                      <div className='form-group mb-3'>
                        <label className='color'> Mot de passe </label>
                        <input type="password" name="password3"  placeholder='Entrer votre mot de passe'  className='form-control'/>
                      
                      
                      </div>
         <div className='form-group mb-3'>
                        <div className='hero-btns'>
        <Button2 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
          CONNECTEZ-VOUS 
        </Button2>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
           INSCRIVEZ-VOUS
        </Button>
        
        
      </div>
                 <div className='rght'>
                        <a  className='color' href='/forget'>Mot de passe oublié ?</a>
                  </div>
                        </div>
        </form>


</div>
  );
}

export default HeroSection;