import React from 'react';
import styles from './Page.module.css';

const Page = ( { variant = 'page', content } ) => {
    return (
        <div className={`${styles.page} column`}>
            {content}
        </div>
    );
};

export default Page;