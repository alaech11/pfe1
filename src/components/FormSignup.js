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
            <label htmlFor='nome' className='form-label'>
                Nome
            </label>
            <input type="text" name='nome' className='form-input' placeholder='Enter votre nome' value={values.nome} onChange={handleChange}/>
        {errors.nome && <p>{errors.nome}</p>}
        </div>

        <div className='form-inputs'>
            <label htmlFor='prenome' className='form-label'>
             Prenome
            </label>  
              <input type="text" name='prenome' className='form-input' placeholder='Enter votre prenome' value={values.prenome} onChange={handleChange}/>
              {errors.prenome && <p>{errors.prenome}</p>}
        </div>

        <div className='form-inputs'>
            <label htmlFor='apoge' className='form-label'>
                Apoge
                </label> 
                <input type="number" name='apoge' className='form-input' placeholder='Enter votre apoge' value={values.apoge} onChange={handleChange}/>
                {errors.apoge && <p>{errors.apoge}</p>}
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
            Mots de passe
             </label>  
              <input type="password" name='password' className='form-input' placeholder='Enter votre mots de passe' value={values.password} onChange={handleChange}/>
              {errors.password && <p>{errors.password}</p>}
        </div>  

        <div className='form-inputs'>
            <label htmlFor='password2' className='form-label'>
           Confermer mots de passe
             </label>  
              <input type="password" name='password2' className='form-input' placeholder='Enter votre mots de passe' value={values.password2} onChange={handleChange}/>
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