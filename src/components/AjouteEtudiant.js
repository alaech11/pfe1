import axios from 'axios';
import React, { Component } from 'react'

class AjouteEtudiant extends Component {

state = {
nom: '',
prenom: '',
apogee: '',
filière: '',
email: '',
password: '',
password2: '',
}
handleInput = (e) =>{
  this.setState({
    [e.target.nom]: e.target.value
  });
}

saveEtudiant = async (e) =>{
   e.preventDefault();
  
   const res = await axios.post('http://localhost:8000/api/inscrivez', this.state);
    
    if(res.data.status === 200){
      console.log(res.data.message);
      this.setState({
        nom: '',
        prenom: '',
        apogee: '',
        filière: '',
        email: '',
        password: '',
        password2: '',
      })
    }

  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>Ajouter Etudiant</h4>
                    </div>

                  <div className='card-body'>

                    <form onSubmit={this.saveEtudiant}>
                      <div className='form-group mb-3'>
                        <label> Nom </label>
                        <input type="text" name="nom" onChange={this.handleInput} placeholder='entrer votre nom' value={this.nom} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                        <label> Prenom </label>
                        <input type="text" name="prenom" onChange={this.handleInput} placeholder='entrer votre prenom' value={this.prenom} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                        <label> Apogee </label>
                        <input type="number" name="apogee" onChange={this.handleInput} placeholder='entrer votre apogee' value={this.apogee} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                           <label> Filière</label>  
             
                            <div class="input-group mb-3">
                              <select className='form-input' name="filière" onChange={this.handleInput} value={this.filière} >
                               <option value=''>--Selectioner la filière--</option>
                               <option value='A'>SMA</option>
                               <option value='I'>SMI</option>
                               <option value='P'>SMP</option>
                               <option value='C'>SMC</option>
                               <option value='VI'>SVI</option>
                               <option value='TU'>STU</option>
                              </select>
                            </div>
                       </div>  

                      <div className='form-group mb-3'>
                        <label> Email </label>
                        <input type="email" name="email" onChange={this.handleInput} placeholder='entrer votre email' value={this.email} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                        <label> Mot de passe </label>
                        <input type="password" name="password" onChange={this.handleInput} placeholder='entrer votre Mot de passe' value={this.password} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                        <label> Confirmer mot de passe </label>
                        <input type="password" name="password2" onChange={this.handleInput} placeholder='confirmer votre mot de passe' value={this.password2} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                        
                        <button type='submit' className='btn btn-primary'>S'inscrir</button>
                        </div>


                    </form>

                  </div>

                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AjouteEtudiant
