import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../SectionTwo/CardSection.css';



const musicArr = [
  {
    title: 'Album 1',
    price: 12.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Album 2',
    price: 14.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Album 3',
    price: 9.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Album 4',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const merchArr = [
  {
    title: 'T-Shirt',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
  },
  {
    title: 'Coffe Cup',
    price: 6.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
  },
];

const MusicSection = () => {
  return (
    <section className='container'>
      <Container>
        <h2 className="text-center my-5">MUSIC</h2>
        <Row>
          {musicArr.map((product, index) => (
            <Col md={6} lg={6} key={index} className="mb-4">
              <Card className="text-center border-0 bg-transparent">
                <Card.Title>{product.title}</Card.Title>
                <Card.Img className="CardImg" variant="top" src={product.imageUrl} style={{ maxWidth: '250px', maxHeight: '250px' }} />
                <Card.Body className="prod-details d-flex justify-content-between">
                  <Card.Text className='price'>${product.price}</Card.Text>
                  <button className="btn-cart btn-primary">ADD TO CART</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const MerchSection = () => {
  return (
    <section className='container'>
      <Container>
        <h2 className="text-center my-5">MUSIC</h2>
        <Row>
          {merchArr.map((product, index) => (
            <Col md={6} lg={6} key={index} className="mb-4">
              <Card className="text-center border-0 bg-transparent">
                <Card.Title>{product.title}</Card.Title>
                <Card.Img className="CardImg" variant="top" src={product.imageUrl} style={{ maxWidth: '250px', maxHeight: '250px' }} />
                <Card.Body className="prod-details d-flex justify-content-between">
                  <Card.Text className='price'>${product.price}</Card.Text>
                  <button className="btn-cart btn-primary">ADD TO CART</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const CardSection = () => {
  return (
    <>
      <MusicSection />
      <MerchSection />
    </>
  );
};

export default CardSection;
