export default function validateInfo(values) {
    let errors = {};
  
    if (!values.Nom.trim()) {
      errors.Nom = 'Nom requis';
    }

    if (!values.Prenom.trim()) {
        errors.Prenom = 'Prenom requis';
      }

      if (!values.Apogee) {
        errors.Apogee = 'apoge requis';
      } else if (values.Apogee.length !== 8) {
        errors.Apogee = 'Apogee doit être 8 characters';
      } 
    
    
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.Email) {
      errors.Email = 'Email requis';
    } else if (!/\S+@etu.uae.ac.ma+/.test(values.Email)) {
      errors.Email = 'L’adresse Email n’est pas valide';
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