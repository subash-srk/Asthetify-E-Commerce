import React, {useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/bag_cart.svg'
import { Link } from 'react-router-dom';


function Navbar() {
    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} />
            <p>Aesthetify</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop")}}><Link to='/'>SHOP</Link>{menu==="shop" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link to='/mens'>MEN</Link>{menu==="mens" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link to='/womens'>WOMEN</Link>{menu==="womens" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to='/kids'>FOOTWEAR</Link>{menu==="kids" ? <hr /> : <></>}</li>

        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><div class="btn-1">
                <a href="">Login</a>
            </div></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar