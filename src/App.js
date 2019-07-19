import React from 'react';
// import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Cart from './components/cart/cart';
import Default from './components/default';
import Details from './components/details';
import Product from './components/product';
import ProductList from './components/productlist';
import Modal from './components/modal';


function App() {
  return (
   <React.Fragment>
     <NavBar/>
    
     <Switch>
       <Route path="/details" component={Details} />
       <Route path="/cart" component={Cart} />
       <Route exact path="/" component={ProductList} />
       <Route component={Default} />
     </Switch> 
      <Modal/>
     {/* <Details></Details>
     <Cart></Cart>
     <ProductList></ProductList>
     <Default></Default> */}
     {/* <h3>Hello from App</h3> */}
   </React.Fragment>
  );
}

export default App;
