import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs vides
    if (username.trim() === '' || password.trim() === '') {
      setError('Veuillez entrer un nom d\'utilisateur et un mot de passe');
      return;
    }

    // Vérification des informations d'authentification
    if (username === 'john' && password === 'password123') {
      console.log('Authentification réussie !');
      // Rediriger vers la page "Home" après l'authentification réussie
      navigate('/home');
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div className="container">
      <h2>Connexion</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
