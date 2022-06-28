import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './search.css';

const Films = () => {
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
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films`);
    setProducts(res.data);
    console.log(res);
  };

  const getEndpointKeyword = async () => {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films?q=${keyword}`);
    setProducts(res.data);
  };

  return (
    <div className="container_films">
      <form className="searchBox">
        <input type="text" placeholder="Search a Product ..." onChange={(e) => setKeyword(e.target.value)} />
      </form>

      <Container>
        <Row className="row card-container">
          {products.map((product) => {
            return (
              <Col md={4} className="mb-3" key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Title className="card-title">{product.title}</Card.Title>
                  <Card.Subtitle className="card-subtitle text-muted">
                    {product.director} - {product.release_date}
                  </Card.Subtitle>
                  <Card.Body>
                    <Card.Text>{product.description}</Card.Text>
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

export default Films;
