import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';
import React, { Component } from 'react';


class HeroSection extends Component {
  state = {
   
    email2: "",
    password3: "",
    
    }

   handle = (e) =>{
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    check = async (e) =>{
      e.preventDefault();
     
      console.log(this.state);
         this.setState({
           email2: "",
           password3: "",
        })}
       
     
   
render()  {

  return (
 <div className='hero-container'>
      
      <img src='images/logoM.jpg' alt='logo'autoPlay loop muted/>
      <h1>COMMENCER VOTRE PFE</h1>
      
   

  <form onSubmit={this.check}>
      <div className='form-group mb-3'>
                        <label className='color'> Email </label>
                        <input type="email" name="email2"  placeholder='Entrer votre email' onChange={this.handle} value={this.email2}  className='form-control' size={50}/>
                        
                         
                      </div>

                      <div className='form-group mb-3'>
                        <label className='color'> Mot de passe </label>
                        <input type="password" name="password3"  placeholder='Entrer votre mot de passe' onChange={this.handle} value={this.password3} className='form-control'/>
                      
                      
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
                        </div> 
                         <div className='rght'>
                        <a  className='color' href='/forget'>Mot de passe oublié ?</a>
                  </div>
        </form>


               
</div>
    )
  }
}
export default HeroSection;