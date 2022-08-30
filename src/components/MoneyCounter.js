import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux/'
import NumberFormat from 'react-number-format';
function MoneyCounter() {
  const money = useSelector(state => state.product.money);
  return (
    
    <Container className='sticky-top'>
        <Row style={{backgroundColor:'#48BB78', color:'white'}}>
            <h1><NumberFormat value={money} displayType='text' thousandSeparator={true} prefix={'$'} /></h1>
        </Row>
    </Container>
    
  )
}

export default MoneyCounter