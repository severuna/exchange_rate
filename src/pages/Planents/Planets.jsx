import React, { useState, useEffect } from 'react';
import Page from '../../components/module/Page/Page';
import DataItem from '../../components/module/DataItem/DataItem';
import ListContainer from '../../components/ListContainer/ListContainer';
import Loader from '../../components/module/Loader/Loader';

const Planets = () => {

    const [planets, setPlanets] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'https://swapi.dev/api/planets/'
            );
            const data = await response.json();
            console.log(data);
            setPlanets(data);
            };
            fetchPost();
        }, []);

    let planets_list = [];

    planets.results ? planets.results.forEach((element) => planets_list.push(<DataItem key={Math.random() * Math.random()} {...element} />)) : console.log('await');
    return (
        <Page title={'planets'} content={
            <ListContainer content={
                <>
                    {planets.results ? planets_list : <Loader />}
                </>
            } />
        } />
    );
};

export default Planets;