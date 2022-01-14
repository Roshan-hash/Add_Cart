import React from 'react';
import { Link } from 'react-router-dom';
import '../header/Header.css';


const Header = ({cartItems}) => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className="logo">
                        E-Shop.com
                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/cart' className='cart'>
                            <i class="fas fa-shopping-cart"></i>
                            <span className={cartItems.length === 0 ? "none" : "cart-lenght"}>
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
