import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
    const [films, setFilms] = useState([]);
    const getData = async () => {
        await fetch("https://swapi.dev/api/films/")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setFilms(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    getData();
    return (
        <div>
            <h1>main</h1>
        </div>
    );
};

export default Main;