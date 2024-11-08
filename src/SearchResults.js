import React from 'react';
import styles from './SearchResults.module.css';
import Track from './Track';

const SearchResults = () => {
    return (
        <div className={styles.container}>
            <Track />
            <div className={styles.rule}></div>
            <Track />
            <div className={styles.rule}></div>
            <Track />
            <div className={styles.rule}></div>
            <Track />
            <div className={styles.rule}></div>
            <Track />
        </div>
    )
};

export default SearchResults;