import React, { useState, useEffect } from 'react';
import Page from '../../components/module/Page/Page';
import ListContainer from '../../components/ListContainer/ListContainer';
import DataItem from '../../components/module/DataItem/DataItem';
import Loader from '../../components/module/Loader/Loader';

const People = () => {

    const [people, setPeople] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'https://swapi.dev/api/people/'
            );
            const data = await response.json();
            console.log(data);
            setPeople(data);
            };
            fetchPost();
        }, []);

        let people_list = [];

        people.results ? people.results.forEach((element) => people_list.push(<DataItem value='people' key={Math.random() * Math.random()} props={element} />)) : console.log('await');
    return (
        <Page title='people' content={
            <ListContainer content={
                <>
                    {people.results ? people_list : <Loader />}
                </>
            } />
        } />
    );
};

export default People;