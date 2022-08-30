import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MoneyCounter from './components/MoneyCounter';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
  
        <Header/>
        <MoneyCounter/>
        <ProductList/>
        <Footer/>
    </div>
  );
}

export default App;
