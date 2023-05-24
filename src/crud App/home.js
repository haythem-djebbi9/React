import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3030/solutions')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container mt-5'>
      <div>
        <Link to="Create" className='btn btn-success mb-5'>Ajouter un problème</Link>
      </div>
      <div className='row'>
        {data.map((d, i) => (
          <div key={i} className='col-md-4 mb-4'>
            <div className='card'>
              <img src={d.lienimage} className='card-img-top' alt={d.nameProblem} />
              <div className='card-body'>
                <h5 className='card-title'>{d.nameProblem}</h5>
                <p className='card-text'>{d.solution}</p>
                <Link to={`/solution/${d.id}`}>Ajouter une solution</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
