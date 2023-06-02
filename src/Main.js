import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Main.css';
import NavBar from './navigation/NavBar/NavBar';
import Home from './pages/Home/Home';
import Planets from './pages/Planents/Planets';
import People from './pages/People/People';
import Species from './pages/Species/Species';
import Films from './pages/Films/Films';
import Footer from './navigation/Footer/Footer';

const Main = () => {

    return (
        <div className='main column'>
            <NavBar />
            <Routes>
                <Route path='/swapi/' element={<Home />} />
                <Route path='/swapi/films' element={<Films />} />
                <Route path='/swapi/people' element={<People />} />
                <Route path='/swapi/planets' element={<Planets />} />
                <Route path='/swapi/species' element={<Species />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Main;