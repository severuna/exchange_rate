import React, { useEffect, useState} from 'react';
import Page from '../../components/module/Page/Page';
import DataItem from '../../components/module/DataItem/DataItem';
import ListContainer from '../../components/ListContainer/ListContainer';
import Loader from '../../components/module/Loader/Loader';

const Starships = () => {
    
    const [starships, setStarships] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'https://swapi.dev/api/starships/'
            );
            const data = await response.json();
            console.log(data);
            setStarships(data);
            };
            fetchPost();
        }, []);

    let starships_list = [];


    starships.results ? starships.results.forEach((element) => starships_list.push(<DataItem key={Math.random() * Math.random()} {...element} />)) : console.log('await');
    return (
        <Page title={'Starships'} content={
            <ListContainer content={
                <>
                    {starships.results ? starships_list : <Loader />}
                </>
            } />
        } />
    );
};

export default Starships;