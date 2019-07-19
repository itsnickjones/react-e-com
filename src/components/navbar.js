import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';
import ButtonContainer from "./button";

export default class NavBar extends Component{
    render(){
        return(
            <NavWrapper className ="navbar navbar-expand-sm navbar-dark px-sm-5">
               
                <Link to='/'>
                     <img
                     src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Ffaticons%2F32%2Fglobe-01-512.png&f=1"
                     alt="store"
                     style={{height:'35%',width:'15%'}}
                     className="navbar-brand"
                    />
                </Link>
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link className= "ml-auto" to="cart">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-shopping-cart"/>    
                        </span>
                        
                        My Cart
                    </ButtonContainer>
                </Link>  

            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    
    .nav-link{
        color: var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize!important;
        }
    `;