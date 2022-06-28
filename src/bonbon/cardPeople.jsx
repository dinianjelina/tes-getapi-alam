import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CardPeople = ({ cardPeople }) => {
  return (
    <Container>
      <Row className="row card-container">
        {cardPeople.map((product) => {
          return (
            <Col md={4} className="mb-3" key={product.id}>
              <Card>
                <Card.Body>
                  <Card.Text>Name: {product.name}</Card.Text>
                  <Card.Text>Gender: {product.gender}</Card.Text>
                  <Card.Text>Age: {product.age}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardPeople;
