import React from 'react'
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import {Container, Row, Col} from 'react-bootstrap';
function Footer() {
  const items = useSelector(state => state.product.items);
  const money = useSelector(state => state.product.money);
  const filtered = items.filter((item) => item.count > 0);
  let spendMoney=0
  filtered.map((item)=>{
    spendMoney+=item.productPrice*item.count;
  })



  if(filtered.length ===0){
    return null
  }
  return (
    <Container>
      <Row>
        <Col>
        <h1>YOUR RECEIPT</h1>
        {filtered.map((item) => 
         <Col key={item.id  }>
            <Row className="justify-content-md-center">
            <Col xs lg="2">  {item.productName} </Col>
            <Col md="auto"> x {item.count}</Col>
            <Col xs lg="2"> 
        <NumberFormat value={item.productPrice*item.count} displayType='text' thousandSeparator={true} prefix={'$'} />
            </Col>
            </Row>
          </Col>
        )
        }
         <div className="row">
    <div className="col-md-6 offset-md-3"><hr /> </div>
  </div>
      <Row className="justify-content-md-center">
        <Col xs={2}><h4>TOTAL :</h4>:</Col>
        <Col xs={2}><NumberFormat value={spendMoney} displayType='text' thousandSeparator={true} prefix={'$'} /></Col>
      </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default Footer

