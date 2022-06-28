import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import CardFilms from './cardFilms';
import CardLocations from './cardLocations';
import CardPeople from './cardPeople';

const Home = () => {
  const categories = ['films', 'people', 'locations', 'species', 'vehicles'];

  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (keyword.length) {
      getEndpointKeyword();
    } else if (category.length) {
      getEndPoints();
    }
  }, [keyword, category]);

  const getEndPoints = async () => {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/${category}`);
    setProducts(res.data);
    console.log(res);
  };

  const getEndpointKeyword = async () => {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/${category}?q=${keyword}`);
    setProducts(res.data);
  };

  return (
    <div className="container_films">
      <div>
        <ul className="categoryBox">
          {categories.map((category) => (
            <li className="category-link" key={category} onClick={() => setCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <form className="searchBox">
        <input type="text" placeholder="Search a Product ..." onChange={(e) => setKeyword(e.target.value)} />
      </form>
      {(category === 'films' && <CardFilms cardFilms={products} />) || (category === 'locations' && <CardLocations cardLocations={products} />) || (category === 'people' && <CardPeople cardPeople={products} />)}
    </div>
  );
};

export default Home;
