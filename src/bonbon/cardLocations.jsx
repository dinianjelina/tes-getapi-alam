import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CardLocations = ({ cardLocations }) => {
  return (
    <Container>
      <Row className="row card-container">
        {cardLocations.map((product) => {
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
  );
};

export default CardLocations;
