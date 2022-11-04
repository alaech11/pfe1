import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
import './Form.css'


const Formsignup = ({submitForm}) => {
   const{handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

  return (
    <div className='form-content-right'>
       <form className='form' onSubmit={handleSubmit}>
        <h1>Commencer à créer votre compte:</h1>
        <div className='form-inputs'>
            <label htmlFor='nom' className='form-label'>
                Nom
            </label>
            <input type="text" name='nom' className='form-input' placeholder='Entrer votre nom' value={values.nom} onChange={handleChange}/>
        {errors.nom && <p>{errors.nom}</p>}
        </div>

        <div className='form-inputs'>
            <label htmlFor='prenom' className='form-label'>
             Prenom
            </label>  
              <input type="text" name='prenom' className='form-input' placeholder='Entrer votre prenom' value={values.prenom} onChange={handleChange}/>
              {errors.prenom && <p>{errors.prenom}</p>}
        </div>

        <div className='form-inputs'>
            <label htmlFor='apogee' className='form-label'>
                Apogee
                </label> 
                <input type="number" name='apogee' className='form-input' placeholder='Entrer votre Apogee' value={values.apogee} onChange={handleChange}/>
                {errors.apogee && <p>{errors.apogee}</p>}
        </div>

        <div className='form-inputs'>
            <label htmlFor='email' className='form-label'>
            Email
             </label>  
              <input type="email" name='email' className='form-input' placeholder='exemple@etu.uae.ac.ma' value={values.email} onChange={handleChange}/>
              {errors.email && <p>{errors.email}</p>}
        </div>  

        <div className='form-inputs'>
            <label htmlFor='password' className='form-label'>
            Mot de passe
             </label>  
              <input type="password" name='password' className='form-input' placeholder='Entrer votre mot de passe' value={values.password} onChange={handleChange}/>
              {errors.password && <p>{errors.password}</p>}
        </div>  

        <div className='form-inputs'>
            <label htmlFor='password2' className='form-label'>
           Confirmer mot de passe
             </label>  
              <input type="password" name='password2' className='form-input' placeholder='Entrer votre mot de passe' value={values.password2} onChange={handleChange}/>
              {errors.password2 && <p>{errors.password2}</p>}
        </div>  

        <button className='form-input-btn' type='submit'>
            Inscrivez-vous
        </button>
        <span className='form-input-login'>
        déjà inscrit? conectez-vous <a href='/conectez'>ici</a>
        </span>
       </form>
    </div>
  )
}

export default Formsignup