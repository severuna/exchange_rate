import React, {useEffect, useState} from 'react';
import Page from '../../components/module/Page/Page';
import Loader from '../../components/module/Loader/Loader';
import ListContainer from '../../components/ListContainer/ListContainer';
import DataItem from '../../components/module/DataItem/DataItem';

const Films = () => {

    const [films, setFilms] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'https://swapi.dev/api/films/'
            );
            const data = await response.json();
            console.log(data);
            setFilms(data);
            };
            fetchPost();
        }, []);

    let film_list = [];


    films.results ? films.results.forEach((element) => film_list.push(<DataItem value='films' key={Math.random() * Math.random()} props={element} />)) : console.log('await');
        
    return (
        <Page title='Films' content={
                <ListContainer content={
                    <>
                        {films.results ? film_list : <Loader />}
                    </>
                } />
        } />
    );
};

export default Films;