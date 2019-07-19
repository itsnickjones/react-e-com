import React, { Component } from 'react'
import Product from "./product";
import Title from "./title";
// import {storeProducts} from '../data';// for console log
import{ProductConsumer} from '../context';
export default class ProductList extends Component{
    // state ={
    //     products:storeProducts
    // };

    render(){
        // console.log(this.state.products);
        //to display state

        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>

                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product =>{
                                        return <Product key={product.id} product={product}/>;
                                    })
                                    // console.log(value);
                                }}
                            </ProductConsumer>  
                        </div>

                    </div>
                </div>
            </React.Fragment>

            // <div>
            //     <Product/>
            // </div>
        )
    }
}