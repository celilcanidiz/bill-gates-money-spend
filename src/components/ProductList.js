import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';


function ProductList() {
  const items = useSelector(state => state.product.items);
  return (
    <Container className='mt-4'>
        <Row>
      {items.map((item)=>(
      <Col xs key={item.id}>
        <ProductCard id={item.id}/>
        </Col>
      )
      )
    }
    
    </Row>
    </Container>
  )
}

export default ProductList