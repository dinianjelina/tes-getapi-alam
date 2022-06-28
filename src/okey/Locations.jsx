import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './search.css';

const Locations = () => {
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (keyword.length) {
      getEndpointKeyword();
    } else {
      getEndPoints();
    }
  }, [keyword]);

  const getEndPoints = async () => {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/locations`);
    setProducts(res.data);
    console.log(res);
  };

  const getEndpointKeyword = async () => {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/locations?q=${keyword}`);
    setProducts(res.data);
  };

  return (
    <div className="container_locations">
      <form className="searchBox">
        <input type="text" placeholder="Search a Product ..." onChange={(e) => setKeyword(e.target.value)} />
      </form>

      <Container>
        <Row className="row card-container">
          {products.map((product) => {
            return (
              <Col md={4} className="mb-3" key={product.id}>
                <Card>
                  <Card.Body>
                    <Card.Text>Name: {product.name}</Card.Text>
                    <Card.Text>Terrain: {product.terrain}</Card.Text>
                    <Card.Text>Films: {product.films}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Locations;
