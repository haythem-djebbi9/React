import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [problem, setProblem] = useState({
    nameProblem: '',
    lienimage: '',
    solution: '',
  });

  const handleChange = (e) => {
    setProblem({ ...problem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(problem); // Afficher les valeurs du formulaire dans la console (peut être modifié selon vos besoins)

    try {
      // Envoyer la requête POST pour ajouter le problème
      await axios.post('http://localhost:3030/solutions', problem);

      // Réinitialiser le formulaire après la soumission réussie
      setProblem({
        nameProblem: '',
        lienimage: '',
        solution: '',
      });

      console.log('Problème ajouté avec succès !');

      // Rediriger vers la page d'accueil après la création du problème
      window.location.href = '/home';
    } catch (error) {
      console.log("Erreur lors de l'ajout du problème :", error);
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Ajouter un problème</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='nameProblem'>Nom du problème</label>
          <input
            type='text'
            className='form-control'
            id='nameProblem'
            name='nameProblem'
            value={problem.nameProblem}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lienimage'>Lien de l'image</label>
          <input
            type='text'
            className='form-control'
            id='lienimage'
            name='lienimage'
            value={problem.lienimage}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='solution'>Solution</label>
          <textarea
            className='form-control'
            id='solution'
            name='solution'
            value={problem.solution}
            onChange={handleChange}
          ></textarea>
        </div>
      
        <button type='submit' className='btn btn-primary'>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default Create;
