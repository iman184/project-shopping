import React,{useState,useContext} from 'react'

import Cart from './svg/Cart.svg'
import {Link} from 'react-router-dom'
import Logo from './img/Iwatch_Flatline.svg'
import {DataContext} from './DataProvider'
export default function Header(){

    const [menu, setMenu]=useState(false)
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const toggleMenu=()=>{
        setMenu(!menu)
    }
    const styleMenu={
        left: menu ? 0 : "-100%"
    }
    return(

       <header>
       <div >
        <Link to='/products'><img src={Logo} width="28%" class="logos"></img></Link>
        </div>
        <ul class="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/login">Login / Register</Link></li>
         </ul>
           <div className="cart-icon">
        <span>{cart.length}</span>
        <Link to="/cart">
         <img src={Cart} alt="" width="30"/>
        </Link>
        </div>
        </header>
    )
}