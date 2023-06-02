import React from 'react';
import styles from './Page.module.css';

const Page = ( { variant = 'page', content, title } ) => {
    return (
        <div className={`${styles.page} column`}>
            <h1 className={`${styles.title}`}>{title}</h1>
            {content}
        </div>
    );
};

export default Page;