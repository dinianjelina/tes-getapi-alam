import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div>
      <Link to={'/films'} className="link-endpoints">
        Films
      </Link>
      <Link to={'/locations'} className="link-endpoints">
        Locations
      </Link>
      <Link to={'/people'} className="link-endpoints">
        People
      </Link>
      <Link to={'/species'} className="link-endpoints">
        Species
      </Link>
      <Link to={'/vehicles'} className="link-endpoints">
        Vehicles
      </Link>
    </div>
  );
};

export default Home;
