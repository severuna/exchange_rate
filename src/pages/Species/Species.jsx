import React, { useState, useEffect} from 'react';
import Page from '../../components/module/Page/Page';
import DataItem from '../../components/module/DataItem/DataItem';
import ListContainer from '../../components/ListContainer/ListContainer';
import Loader from '../../components/module/Loader/Loader';

const Species = () => {
    const [species, setSpecies] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'https://swapi.dev/api/species/'
            );
            const data = await response.json();
            console.log(data);
            setSpecies(data);
            };
            fetchPost();
        }, []);

    let species_list = [];

    species.results ? species.results.forEach((element) => species_list.push(<DataItem key={Math.random() * Math.random()} {...element} />)) : console.log('await');
    return (
        <Page title={'species'} content={
            <ListContainer content={
                <>
                    {species.results ? species_list : <Loader />}
                </>
            } />
        } />
    );
};

export default Species;