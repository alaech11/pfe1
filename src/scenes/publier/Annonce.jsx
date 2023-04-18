import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

const FormulaireAnnonce = () => {
  const [titre, setTitre] = useState('');
  const [message, setMessage] = useState('');
  const [groupe, setGroupe] = useState('');
  const [annonceEnvoyee, setAnnonceEnvoyee] = useState(false);

  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleGroupeChange = (event) => {
    setGroupe(event.target.value);
  };

  const handleEnvoyerAnnonce = () => {
    // Effectuer la validation avant d'envoyer l'annonce
    if (titre === '' || message === '' || groupe === '') {
      alert("Veuillez remplir tous les champs avant d'envoyer l'annonce.");
      return;
    }

    // Envoyer l'annonce au serveur 
    // Vous pouvez utiliser fetch ou Axios pour effectuer des appels API vers votre backend
    // Voici un exemple en utilisant fetch :
    fetch('http://localhost:8000/api/sendAnnouncement', {
      method: 'POST',
      body: JSON.stringify({ titre, message, groupe }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Traiter les données de réponse comme nécessaire
        console.log("Annonce envoyée avec succès :", data);
        setAnnonceEnvoyee(true);
      })
      .catch((error) => {
        // Gérer les erreurs survenues pendant l'appel API
        console.error("Échec de l'envoi de l'annonce :", error);
      });
  };

  return (
    <Box m="15px">
      <TextField
        label="Titre"
        fullWidth
        value={titre}
        onChange={handleTitreChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={handleMessageChange}
        margin="normal"
        variant="outlined"
      />
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="groupe-select">Groupe</InputLabel>
        <Select
          label="Groupe"
          value={groupe}
          onChange={handleGroupeChange}
          inputProps={{ id: 'groupe-select' }}
        >
          <MenuItem value="groupe1">Groupe 1</MenuItem>
          <MenuItem value="groupe2">Groupe 2</MenuItem>
          <MenuItem value="groupe3">Groupe 3</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleEnvoyerAnnonce}
        disabled={annonceEnvoyee}
      >
        {annonceEnvoyee ? "Annonce envoyée" : "Envoyer l'annonce"}
      </Button>
    </Box>
  );
};

export default FormulaireAnnonce;
