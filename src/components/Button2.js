import React, {useState} from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button2 = ({
  children,
  type,
  buttonStyle,
  buttonSize
 }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const[show,setShow]= useState(false)
  return (
    

     <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={()=> setShow(!show)}
        type={type}>

        {children}
      </button> <div>{
        show? <form>
          <div className='form-group mb-3'>
                        <label className='color'> Email </label>
                        <input type="email" name="email2"  placeholder='Entrer votre email'  className='form-control'/>
                        
                         
                      </div>

                      <div className='form-group mb-3'>
                        <label className='color'> Mot de passe </label>
                        <input type="password" name="password3"  placeholder='Entrer votre mot de passe'  className='form-control'/>
                      
                      
                      </div>
                      <div className='form-group mb-3'>
                <Link to="/User">
                        <button type='submit' className='btn btn-primary'>Connecter</button>
              </Link>
                        <a  className='color' href='/password'>Mot de passe oublié ?</a>
                  
                        </div>
        </form>: null
      }
      </div></>
    

    
    
    
  );
};