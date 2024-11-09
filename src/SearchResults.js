import React from 'react';
import styles from './SearchResults.module.css';
import Track from './Track';

const SearchResults = ( { results} ) => {

    return (
        <div className={styles.container}>
            {results.map((result, index) => (
                <div>
                    <Track title={result.title} artist={result.artist} key={`li-${index}`} />
                    <div className={styles.rule}></div>
                </div>
            ))}
        </div>
    )
};

export default SearchResults;