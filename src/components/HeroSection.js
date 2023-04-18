import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); 
    // Perform login API request
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(response);
      if (response.status === 200) {
        // Login successful
        const responseData = await response.json();
        const { role } = responseData; // Assuming the response contains the user's role
        if (role === '2') {
          // Redirect to eng dashboard
          navigate("/Appdash");
        } else if (role === '3') {
          // Redirect to etud dashboard
          navigate("/AppdashU");
        } 
      } else {
        // Login failed
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An error occurred. Please try again later.");
    }
  };
     
   


  return (
 <div className='hero-container'>
    
      <img src='images/logoM.jpg' alt='logo'autoPlay loop muted/>
      <h1>COMMENCER VOTRE PFE</h1>
      
   

  <form onSubmit={handleLogin}>
      <div className='form-group mb-3'>
                        {error && <p>{error}</p>} 
                        
                        <label className='color'> Email </label>
                        
                        
                         <input  type="email" placeholder="Email"  value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='form-control' 
                          size={50}/>
                        
                         
                      </div>

                      <div className='form-group mb-3'>
                        <label className='color'> Mot de passe </label>
                        <input type="password"
                              placeholder="Password"
                              value={password}
                               onChange={(e) => setPassword(e.target.value)}className='form-control'/>
                      
                      
                      </div>
         <div className='form-group mb-3'>
                        <div className='hero-btns'>
        <Button2
          className='btns'
          buttonStyle='btn-outline' 
          buttonSize='btn--large'
           onClick={handleLogin}
         
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
export default HeroSection;