import axios from "axios";
import { useState, useEffect } from "react";

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
 const handleSubmit = e => {
    e.preventDefault();

    setErroes(validate(values))
    setIsSubmitting(true)
 }
   useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
      }},[errors])

   return{handleChange, values, handleSubmit, errors}

   /*saveStudent = async e => {
      e.preventDefault();
  
      const res = await axios.post( '',this.state);
      if(res.data.status === 200){
          console.log(res.data.message);  
        }
     }*/


    /* SaveEtudiant = async(e)=>{
      e.proventDefault();

      const res = await axios.post('http://127.0.0.1:8000/api/add-etudiant',this.State);
      if(res.data.status === 200){
           
          console.log(res.data.message);
          this.setState({
            nom: '',
            prenom: '',
            apogee: '',
            fillière: '',
            email: '',
            password: '',
            password2: '',
          });

      }*/



     }
  


export default useForm