import React from 'react';
import Page from '../../components/module/Page/Page';
import ListContainer from '../../components/ListContainer/ListContainer';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <Page title={'welcome!'} content={
            <>
                <h2 className='subtitle'>You can view the list:</h2>
                <ListContainer content={
                    <>
                    <div className='link-review column'>
                        <img src='https://cdn.shopify.com/s/files/1/1416/8662/products/StarWarsEpisodeI-ThePhantomMenace_r12_french_original_film_art.jpg' alt='' className='link-review__img' />
                        <Link to='/swapi/films' className='link-review__title'>Films</Link>
                    </div>
                    <div className='link-review column'>
                        <img src='https://m.media-amazon.com/images/I/91iFMvkfPuL.jpg' alt='' className='link-review__img' />
                        <Link to='/swapi/people' className='link-review__title'>People</Link>
                    </div>
                    <div className='link-review column'>
                        <img src='https://i.pinimg.com/originals/12/58/41/1258417ba6fe86adf871e8c6eddfe5c3.jpg' alt='' className='link-review__img' />
                        <Link to='/swapi/planets' className='link-review__title'>Planets</Link>
                    </div>
                    <div className='link-review column'>
                        <img src='https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/' alt='' className='link-review__img' />
                        <Link to='/swapi/species' className='link-review__title'>Species</Link>
                    </div>
                    </>
                } />
            </>
        } />
    );
};

export default Home;