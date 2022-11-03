import { useState, useEffect } from "react";

const useForm = (callback, validate) => {

    const [values, setValues] = useState({
        nome: '',
        prenome: '',
        apogee: '',
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
}

export default useForm