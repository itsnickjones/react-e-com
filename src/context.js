import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext(); 
//Provider 
//Consumer
class ProductProvider extends Component {
    state = { 
        products: [], 
        detailProduct: detailProduct,
        cart: [],
        modalOpen:false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0

     };
     componentDidMount(){
         this.setProducts();
     }

     setProducts = () =>{
         let tempProducts = [];
         storeProducts.forEach(item => {
             const singleItem ={...item};
             tempProducts=[...tempProducts,singleItem];
         })
         this.setState(()=> {
             return{products:tempProducts}
        });
     };

     getItem = (id) =>{
         const product = this.state.products.find(item=> item.id === id);
         return product; 
     }

     handleDetail= (id) => {
         const product = this.getItem(id); 
         this.setState(()=> {
                    return {detailProduct: product};
         })
        //  console.log('hello from detail');
     };

        addToCart= id => {
         let tempProducts = [...this.state.products];
         const index = tempProducts.indexOf(this.getItem(id));
         const product = tempProducts[index];
         product.inCart = true;
         product.count =1;
         const price = product.price;
         product.total = price; 

         this.setState(
            () =>{
            return {products:tempProducts, cart: [...this.state.cart,product]};
            },
            () => {
                this.addTotals();
                console.log(this.state);
            }
          );
        };
        openModal = id => {
            const product = this.getItem(id);
            this.setState(()=>{
                return {modalProduct:product,modalOpen:true};
            })
        }
        closeModal = () =>{
            this.setState(()=>{
                return {modalOpen:false}
            })
        }

        increment = (id) =>{
            let tempcart =[...this.state.cart];
            const selectedProduct = tempcart.find(item=> item.id ===id);
            const index = tempcart.indexOf(selectedProduct);
            const product = tempcart[index];
            product.count = product.count +1; 
            product.total = product.count * product.price;
            this.setState(()=>{
                return{
                    cart:[...tempcart]
                };
            },
                ()=>{
                    this.addTotals();
                }
            );
            console.log('increment cart');
        };
        decrement = (id) =>{
            let tempcart =[...this.state.cart];
            const selectedProduct = tempcart.find(item=> item.id ===id);
            const index = tempcart.indexOf(selectedProduct);
            const product = tempcart[index];
            product.count = product.count -1; 
           
            if(product.count === 0){
                this.removeItem(id)
            }else{
                product.total = product.count * product.price;
                this.setState(()=>{
                    return{
                        cart:[...tempcart]
                    };
                },
                    ()=>{
                        this.addTotals();
                    }  
                );
            };
  
           
            console.log('decrement cart');
        }
        removeItem = (id) =>{

            let tempProducts = [...this.state.products];
            let tempCart = [...this.state.cart];
            tempCart = tempCart.filter(item=> item.id !== id);
            const index = tempProducts.indexOf(this.getItem(id));
            let removedProduct = tempProducts[index];
            removedProduct.inCart= false;
            removedProduct.count= 0;
            removedProduct.total= 0;
            this.setState(()=>{
                return{
                    cart:[...tempCart],
                    products:[...tempProducts]
                };
            },
            ()=>{
                this.addTotals();
            }
            );

            // console.log('renoved item');
        };
        clearCart = (id)=>{
            this.setState(()=>{
                return{
                    cart:[]
                };
            },
            ()=>{
                this.setProducts();
                this.addTotals();
            }
            );
            console.log("cart cleared");
        }   ;
        addTotals= () =>{
            let subTotal=0; 
            this.state.cart.map(item =>(subTotal+=item.total));
            const temptax = subTotal * 0.08;
            const tax = parseFloat(temptax.toFixed(2));
            const total = subTotal + tax ;
            this.setState(()=>{
                return {
                    cartSubTotal: subTotal,
                    cartTax:tax,
                    cartTotal: total
                };
            });

        };

        //  console.log(`hello from add to cart ${id}`);
    //  tester = () => {
    //     console.log('State product : ', this.state.products[0].inCart);
    //     console.log('Store product : ', storeProducts[0].inCart);
    //      const tempProducts = [...this.state.products];
    //      tempProducts[0].inCart =true;
    //      this.setState(()=>{
    //          return {products: tempProducts}
    //         },()=>{
    //             console.log('State product : ', this.state.products[0].inCart);
    //             console.log('Store product : ', storeProducts[0].inCart);
    //      })

    //  }
     render() { 
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,

                }}
                >
                {/* <button onClick={this.tester}>test me </button> */}
                {this.props.children}
            </ProductContext.Provider>


         );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider,ProductConsumer};