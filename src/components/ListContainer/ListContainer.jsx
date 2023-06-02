import React from 'react';
import styles from './ListContainer.module.css'

const ListContainer = ( { variant = 'container', content}) => {
    return (
        <div className={`${styles.container} row`}>
            {content}
        </div>
    );
};

export default ListContainer;