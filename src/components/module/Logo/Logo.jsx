import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import './Logo.css';

const Logo = () => {
    return (
        <Link to='swapi' className='logo'>
            <img src={logo} alt='star wars logo' className='logo-img' />
        </Link>
    );
};

export default Logo;