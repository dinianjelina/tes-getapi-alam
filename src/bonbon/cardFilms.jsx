import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CardFilms = ({ cardFilms }) => {
  return (
    <Container>
      <Row className="row card-container">
        {cardFilms.map((product) => {
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
  );
};

export default CardFilms;
