import React from 'react';
import styles from './SearchBar.module.css';
import searchIcon from './Search.svg'

const SearchBar = () => {
    return (
        <form className={styles.container}>
            <input className={styles.input} type='text'/>
            <button type='submit' className={styles.button}><img src={searchIcon}></img></button>
        </form>
    )
};

export default SearchBar;