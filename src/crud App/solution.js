import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Solution() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [solution, setSolution] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/solutions/${id}`)
      .then(res => {
        const { solution, lienimage } = res.data;
        setSolution(solution);
        setImageUrl(lienimage);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSolutionChange = (e) => {
    setSolution(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSolutionSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3030/solutions/${id}`, { solution, lienimage: imageUrl });
      console.log('Solution modifiée avec succès !');
      // Redirection vers la page d'accueil après la modification réussie
      navigate('/home');
    } catch (error) {
      console.log("Erreur lors de la modification de la solution :", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mt-5'>
      <h2>Modifier la solution</h2>
      <form onSubmit={handleSolutionSubmit}>
        <div className='form-group'>
          <label htmlFor='solution'>Solution</label>
          <textarea
            className='form-control'
            id='solution'
            name='solution'
            value={solution}
            onChange={handleSolutionChange}
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='imageUrl' hidden>Lien de l'image</label>
          <input
            type='text'
            className='form-control'
            id='imageUrl'
            name='imageUrl'
            value={imageUrl}
            onChange={handleImageUrlChange}
          hidden />
        </div>
        <button type='submit' className='btn btn-primary'>
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default Solution;
