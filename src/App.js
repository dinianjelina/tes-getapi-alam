import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Films from './okey/Films';
import Home from './okey/index';
import Locations from './okey/Locations';
import People from './okey/People';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </Router>
  );
};

export default App;
