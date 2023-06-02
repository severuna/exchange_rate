import React from 'react';
import './DataItem.css';

const DataItem = ( props ) => {
    return (
        <div className='list-item column'>
            <img src='' alt='item img' className='list-item__img' />
            <h1 className='list-item__title'>{props.title}</h1>
        </div>
    );
};

export default DataItem;