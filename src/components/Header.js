import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
function Header() {
  return (
  <Container className='header'>
        <Row className='mx-auto'>
    <Col md={{ span: 2, offset: 5 }}><Image src='https://neal.fun/spend/billgates.jpg' roundedCircle className='profile_img' /></Col>
        </Row>
        <Row>
            <Col>
            <h1>Spend Bill Gates' Money</h1>
            </Col>
        </Row>
     </Container>
  )
}

export default Header