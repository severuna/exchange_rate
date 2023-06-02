import React, { useEffect, useState } from 'react';
import './Loader.css';
import loader from '../../../assets/loader.svg';

const Item = () => {
    return (
        <img src={loader} alt='' className='loader-item' />
    )
}

const Loader = () => {

    const [ list, setList ] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setList([...list, <Item key={Math.random() + Math.random()}/>]);
    
        }, 100);
        return () => clearInterval(interval);
    })

    return (
        <div className='loader row'>
            {list.map((item) => item)}
        </div>
    );
};

export default Loader;