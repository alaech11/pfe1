import axios from 'axios';
import React, { Component } from 'react';
import swal from'sweetalert';
import './ajoute.css';



class AjouteProf extends Component {

state = {
nom: "",
prenom: "",
code: "",
departement: "",
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
  const {nom,prenom,code,departement,email,password,password2} = this.state;
  let isvalid = true;
  const errors = {};
  if (!nom.trim()) {
    errors.nom = 'Nom requis';
    isvalid = false;
  }


  if (!prenom.trim()) {
      errors.prenom = 'Prenom requis';
      isvalid = false;
    }

    if (!code) {
      errors.code = 'Code requis';
      isvalid = false;
    } else if (code.length !== 8) {
      errors.code = 'Code doit être 8 characters';
      isvalid = false;
    } 
    
    if (!departement) {
      errors.departement = 'Departement requis';
      isvalid = false;
    }
 

  if (!email) {
    errors.email = 'Email requis';
    isvalid = false;
  } else if (!/\S+@uae.ac.ma+/.test(email) ) {
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

  
  



saveProf = async (e) =>{
   e.preventDefault();
  const isvalid = this.formval();
  const addForm = document.getElementById("addForm");

  if(isvalid){
 
   console.log(this.state);
   const res = await axios.post('http://localhost:8000/api/save', this.state).then(
    (res) => {
      if(res.data.message === "'unique_email'"){
    swal ( "Oops" ,  "Email deja existe" ,  "error" )
  }
  if(res.data.message === "'unique_code'"){
    swal ( "Oops" ,  "Code deja existe" ,  "error" )
    
  }
      addForm.reset();
      return res;
    }
   )
  
   console.log(res);
    if(res.data.status === 200){
      //console.log(res.data.message);
      swal({
        title: "Success!",
        text: " vérifier votre boite email",
        icon: "success",
        button: "ok!",
      });
    }

      this.setState({
        nom: "",
        prenom: "",
        code: "",
        departement: "",
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

                    <form onSubmit={this.saveProf} method="post" id="addForm">
                      <div className='form-group mb-3'>
                        <label> Nom </label>
                        <input type="text" name="nom"  placeholder='Entrer votre nom' onChange={this.handleInput} value={this.nom} className='form-control'/>
                        
                         
                      </div>

                      <div className='form-group mb-3'>
                        <label> Prenom </label>
                        <input type="text" name="prenom" onChange={this.handleInput} placeholder='Entrer votre prenom' value={this.prenom} className='form-control'/>
                      
                      
                      </div>

                      <div className='form-group mb-3'>
                        <label> code </label>
                        <input type="number" name="code" onChange={this.handleInput} placeholder='Entrer votre code' value={this.code} className='form-control'/>
                      </div>

                      <div className='form-group mb-3'>
                           <label> Departement</label>  
             
                            <div className="input-group mb-3">
                              <select className='form-input' name="departement" onChange={this.handleInput} value={this.departement} >
                               <option value=''>--Selectioner la departement--</option>
                               <option value='MAT'>Mathématiques </option>
                               <option value='INF'> Informatique​</option>
                               <option value='PHY'> Physique</option>
                               <option value='CHI'>Chimie</option>
                               <option value='BIO'>Biologie </option>
                               <option value='GEO'>Géologie ​</option>
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

export default AjouteProf;
