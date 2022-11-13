
import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {

    const [values, setValues] = useState({
        nom: '',
        prenom: '',
        apogee: '',
        filière: '',
        email: '',
        password: '',
        password2: '',
 }) 

 const[errors, setErroes] = useState({})

 const [isSubmitting, setIsSubmitting] = useState(false)

 const handleChange = e => {
    const {name, value} = e.target
    setValues({
        ...values,
        [name]: value
    })
 }

 /*const saveEtudiant = async (e) =>{
   e.preventDefault();
   
}*/
 const handleSubmit = async (e) => {
   e.preventDefault();
   
   setErroes(validate(values))
    setIsSubmitting(true)
    
    const res = await axios.post('http://127.0.0.1:8000/api/inscrivez',this.State);
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
        });

    
 }
    
 }
   useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
      }},[errors])

   return{handleChange, values, handleSubmit, errors}
  
   }


export default useForm