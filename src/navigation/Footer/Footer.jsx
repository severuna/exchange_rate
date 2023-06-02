import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer column'>
            <h2 className='footer-desc'>Created by <Link to='https://github.com/severuna' className='footer-desc__link' target='_blank'>Severuna</Link></h2>
        </footer>
    );
};

export default Footer;