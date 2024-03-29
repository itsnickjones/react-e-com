import React, { Component } from 'react'; 
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import ButtonContainer from './button';

class Details extends Component {
    render() { 
        return ( 
           <ProductConsumer>
                {(value) =>{
               const {id,company,img,price, inCart, info,title} =
               value.detailProduct;
               return (
                   <div className="container py-5">
                        {/* title */}
                        <div className="row ">
                          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                             <h1>{title}</h1>

                          </div>
                         </div>
                        {/* title end */}
                        <div className="row">  
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">  
                                <img src={img} className="img-fluid" alt="product"/>
                             </div>
                             {/* product text */}
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">  
                                <h3>model: {title}</h3>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Manufacturer: <span className= "text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price : <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0 ">
                                    Some info
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                <div>
                                    <Link to="/">
                                    <ButtonContainer>
                                        Back to products
                                    </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled = {inCart? true: false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);

                                        }}>

                                       {inCart? "in Cart": "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>              
                        </div>
                   </div>
               );
            //    console.log(value.detailProduct);
                }}   
           </ProductConsumer>
                
         );
    }
}
 
export default Details;