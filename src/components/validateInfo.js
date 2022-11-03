export default function validateInfo(values) {
    let errors = {};
  
    if (!values.nome.trim()) {
      errors.nome = 'Nom requis';
    }

    if (!values.prenome.trim()) {
        errors.prenome = 'Prenom requis';
      }

      if (!values.apogee) {
        errors.apogee = 'Apogee requis';
      } else if (values.apogee.length !== 8) {
        errors.apogee = 'Apogee doit être 8 characters';
      } 
    
    
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email requis';
    } else if (!/\S+@etu.uae.ac.ma+/.test(values.email)) {
      errors.email = 'L’adresse Email n’est pas valide';
    }
    if (!values.password) {
      errors.password = 'mots de passe requis';
    } else if (values.password.length < 6) {
      errors.password = 'mots de passe doit être 6 characters ou plus';
    }
  
    if (!values.password2) {
      errors.password2 = 'mots de passe requis';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Les mots de passe ne correspondent pas';
    }
    return errors;
  }