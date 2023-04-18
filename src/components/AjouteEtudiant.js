import axios from 'axios';
import React, { Component } from 'react';
import swal from'sweetalert';
import './ajoute.css';



class AjouteEtudiant extends Component {

state = {
name: "",
surname: "",
apogee: "",
filiere: "",
email: "",
password: "",
password2: "",
errors: {},

}
handleInput = (e) =>{
  this.setState({
    [e.target.name]: e.target.value
  });
}

formval = () => {
  const {name,surname,apogee,filiere,email,password,password2} = this.state;
  let isvalid = true;
  const errors = {};
  if (!name.trim()) {
    errors.name = 'Nom requis';
    isvalid = false;
  }


  if (!surname.trim()) {
      errors.surname = 'Prenom requis';
      isvalid = false;
    }

    if (!apogee) {
      errors.apogee = 'Apogee requis';
      isvalid = false;
    } else if (apogee.length !== 8) {
      errors.apogee = 'Apogee doit être 8 characters';
      isvalid = false;
    } 
    
    if (!filiere) {
      errors.filiere = 'filière requis';
      isvalid = false;
    }
 

  if (!email) {
    errors.email = 'Email requis';
    isvalid = false;
  } else if (!/\S+@etu.uae.ac.ma+/.test(email) ) {
    errors.email = 'L’adresse Email n’est pas valide';
    isvalid = false;
  }


  if (!password) {
    errors.password = 'Mots de passe requis';
    isvalid = false;
  } else if (password.length < 6) {
    errors.password = 'Mots de passe doit être 6 characters ou plus';
    isvalid = false;
  }

  if (!password2) {
    errors.password2 = 'Mots de passe requis';
    isvalid = false;
  } else if (password2 !== password) {
    errors.password2 = 'Les mots de passe ne correspondent pas';
    isvalid = false;
  }
  this.setState({errors});
  return isvalid;
}

  
  



saveEtudiant = async (e) =>{
   e.preventDefault();
  const isvalid = this.formval();
  const addForm = document.getElementById("addForm");

  if(isvalid){
 
   console.log(this.state);
   const res = await axios.post('http://localhost:8000/api/register', this.state).then(
    (res) => {
      if(res.data.message === "'unique_email'"){
    swal ( "Oops" ,  "Email deja existe" ,  "error" )
  }
  if(res.data.message === "'unique_apogee'"){
    swal ( "Oops" ,  "Apogee deja existe" ,  "error" )
    
  }
      addForm.reset();
      return res;
    }
   )
  
   console.log(res);
    if(res.data.status === 'success'){
      //console.log(res.data.message);
      swal({
        title: "Success!",
        text: " vérifier votre boite email",
        icon: "success",
        button: "ok!",
      });
    }

      this.setState({
        name: "",
        surname: "",
        apogee: "",
        filiere: "",
        email: "",
        password: "",
      password2: ""})}
    
  }

  render() {
    
    const {errors} = this.state;

  


    return (
      <>
   
      
   <img className='fex' src='images/FS-tetouan-logo.png' alt='logo'/>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card'>
                    <div >
                        <h4 className="d-inline-flex p-2">Créer votre compte :</h4>
                    </div>

                  <div className='card-body'>

                    <form onSubmit={this.saveEtudiant} method="post" id="addForm">
                      <div className='form-group mb-3'>
                        <label> Nom </label>
                        <input type="text" name="name"  placeholder='Entrer votre nom' onChange={this.handleInput} value={this.name} className='form-control'/>
                        
                         
                      </div>

                      <div className='form-group mb-3'>
                        <label> Prenom </label>
                        <input type="text" name="surname" onChange={this.handleInput} placeholder='Entrer votre prenom' value={this.surname} className='form-control'/>
                      
                      
                      </div>

                      <div className='form-group mb-3'>
                        <label> Apogee </label>
                        <input type="number" name="apogee" onChange={this.handleInput} placeholder='Entrer votre apogee' value={this.apogee} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                           <label> Filière</label>  
             
                            <div className="input-group mb-3">
                              <select className='form-input' name="filiere" onChange={this.handleInput} value={this.filiere} >
                               <option value=''>--Selectioner la filière--</option>
                               <option value='SMA'>SMA</option>
                               <option value='SMI'>SMI</option>
                               <option value='SMP'>SMP</option>
                               <option value='SMC'>SMC</option>
                               <option value='SVI'>SVI</option>
                               <option value='STU'>STU</option>
                              </select>
                              
                            </div>
                           
                       </div>  

                      <div className='form-group mb-3'>
                        <label> Email </label>
                        <input type="email" name="email" onChange={this.handleInput} placeholder='Entrer votre email' value={this.state.email} className='form-control'/>
                         

                       
                       
                      </div>

                      <div className='form-group mb-3'>
                        <label> Mot de passe </label>
                        <input type="password" name="password" onChange={this.handleInput} placeholder='Entrer votre Mot de passe' value={this.state.password} className='form-control'/>

                       
                      </div>

                      <div className='form-group mb-3'>
                        <label> Confirmer mot de passe </label>
                        <input type="password" name="password2" onChange={this.handleInput} placeholder='Confirmer votre mot de passe' value={this.state.password2} className='form-control'/>
                        
                       
                      </div>
                            <div>
                              <label className='cadre'>!! message d'erreur !!</label>
                              {Object.keys(errors).map((value)=>{
                               return <div style={{color : "red"}} >{errors[value]}</div>
                                      })}</div> 
                      <div className='form-group mb-3'>
                             
                        <button type='submit' className='btn btn-primary'>S'inscrir</button>
                        
                     
                        </div>
                                    <span className='form-group mb-3'>
                                     déjà inscrit? connectez-vous <a href='/'>ici</a>
                                      </span>

                    </form>
        
                  </div>

                </div>
            </div>
        </div>
      </div>    
            </>
    )
  }
}

export default AjouteEtudiant;
