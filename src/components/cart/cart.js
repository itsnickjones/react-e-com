import React, { Component } from 'react'; 
import Title from '../title';
import CartColumns from './cartcolumns';
import EmptyCart from './emptycart';
import {ProductConsumer} from '../../context';
import CartList from'./cartlist';
import CartTotals from './carttotals';
class Cart extends Component {
    render() { 
        return ( 
            <section>
                    <ProductConsumer>
                        {value =>{
                            const {cart} = value;
                            if(cart.length>0){
                                return(
                                    <React.Fragment>
                                     <Title name="your" title="cart"/>
                                     <CartColumns/>
                                     <CartList value ={value} />
                                     <CartTotals value={value}/>
                                    </React.Fragment>
                                );
                            }
                            else{
                                return <EmptyCart/>;
                            }
                        }}
                        {/* <Title name ="name" title="title" />
                        <CartColumns/>
                        <EmptyCart/> */}
                    </ProductConsumer>
            </section>

         );
    }
}
 
export default Cart;