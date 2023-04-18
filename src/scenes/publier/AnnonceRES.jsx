import React, { useState, useEffect } from 'react';

const GroupePage = () => {
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    // Simulated API call to fetch the announcement data for this group
    // Replace with your own API call to fetch the announcement data from your backend
    // using the appropriate endpoint and parameters
    const fetchAnnouncement = async () => {
      try {
        // Assuming the API response returns the announcement data in the following format:
        // { titre: 'Titre de l\'annonce', message: 'Contenu du message' }
        const response = await fetch('http://localhost:8000/api/getAnnouncement', {
          method: 'GET',
          // Pass the group information as query parameters, if needed
          // e.g., ?groupe=groupe1
        });
        const data = await response.json();
        setAnnonce(data);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'annonce :", error);
      }
    };

    fetchAnnouncement();
  }, []);

  return (
    <div>
      {annonce ? (
        <div>
          <h2>{annonce.titre}</h2>
          <p>{annonce.message}</p>
        </div>
      ) : (
        <p>Aucune annonce pour ce groupe</p>
      )}
    </div>
  );
};

export default GroupePage;
