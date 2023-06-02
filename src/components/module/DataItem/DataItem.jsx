import React from 'react';
import './DataItem.css';
import filmsArr from '../../../assets/data/films';
import peopleArr from '../../../assets/data/people';
import planetsArr from '../../../assets/data/planets';
import speciesArr from '../../../assets/data/species';

const DataItem = ( props ) => {

    let item = {};

    if(String(props.value) === 'films') {

        filmsArr.forEach((element) => {
            if(String(element.title) === String(props.props.title)) {
                item.src = element.src;
                item.title = element.title;
            }
        })

    } else if (String(props.value) === 'people') {
        peopleArr.forEach((element) => {
            if(String(element.name) === String(props.props.name)) {
                item.src = element.src;
                item.title = element.name;
            }
        })
    } else if (String(props.value) === 'planets') {
        planetsArr.forEach((element) => {
            if(String(element.name) === String(props.props.name)) {
                item.src = element.src;
                item.title = element.name;
            }
        })
    } else if (String(props.value) === 'species') {
        speciesArr.forEach((element) => {
            if(String(element.name) === String(props.props.name)) {
                item.src = element.src;
                item.title = element.name;
            }
        })
    } 
    return (
        <div className='list-item column'>
            <img src={item.src} alt='item img' className='list-item__img' />
            <h1 className='list-item__title'>{item.title}</h1>
        </div>
    );
};

export default DataItem;