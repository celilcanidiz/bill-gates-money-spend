import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Card , Button, Col} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import {updateCount} from "../src/redux/products/productsSlice";


function ProductCard({id}) {
  const items = useSelector(state => state.product.items);
  const money = useSelector(state => state.product.money);
  const initialMoney=useSelector(state => state.product.initialMoney);
  
  const item = items.find((tmp) => tmp.id === id);
  const dispatch = useDispatch();

  const [count,setCount] = useState(item.count);
  const [isBuyable,setisBuyable] =useState(false);
  const [isSellable,setisSellable] =useState(true);
  let maximumBuy=Math.floor(money/item.productPrice);
  let maximum=Number(count)+Number(maximumBuy);
  
  useEffect(() => { 
    dispatch(updateCount({id:item.id, count:count}))
    
    control();
  }, [count]);

  useEffect(() => {
    if(item.productPrice>money ){
      setisBuyable(true);
    }
    if(item.productPrice<=money ){
      setisBuyable(false);
    }
  }, [money]);
  
  
  const buy =()=>{
    handleChange(Number(count)+1);
  }

  const sell =()=>{
    handleChange(Number(count)-1);
  }
  const control =()=>{
    if(count > 0){
      setisSellable(false);
    }
    if(count == 0){
      setisSellable(true);
    }
  }

  const handleChange = (value) =>{
    if(value>maximum && money>0 ){
      setCount(maximum)
    }
    else if(value<0){
      setCount(0);
    }
    else if(money ==0 && value<count){
      setCount(value);
    }
    else{
      setCount(value);
    }
  }

  
  return (
<div style={{ backgroundColor:'white',  width:'fit-content', border:'none' }}>
    <Card style={{ width:"416px", }}>
      <Card.Img variant="top" src={item.image} style={{width:'10rem', height:'11rem', alignSelf:'center', border:'none', marginTop:'10px'}} />
      <Card.Body>
        <h5>{item.productName}</h5>
        <Card.Text>
        <NumberFormat value={item.productPrice} displayType='text' thousandSeparator={true} prefix={'$'} />
        </Card.Text>
        <div className="btn-group" role="group" aria-label="Default button group">
  <Button type="button" className="btn  btn-danger" disabled={isSellable} onClick={()=>sell()}>Sell</Button>
  <input type='number' value={count} onChange={(e)=>handleChange(e.target.value)} className='input'/>
  <Button type="button" className="btn btn-success" disabled={isBuyable} onClick={()=>buy()}>Buy</Button>
</div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard