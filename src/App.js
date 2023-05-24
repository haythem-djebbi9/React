import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './crud App/home';
import 'bootstrap/dist/css/bootstrap.css';
import Create from './crud App/Create';
import Solution from './crud App/solution';
import Login from './crud App/login'; // Importez le composant de la page de connexion

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} /> {/* Ajoutez la route pour la page de connexion */}
        <Route path="/home/create" element={<Create />} />
        <Route path="/solution/:id" element={<Solution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
