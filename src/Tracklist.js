import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

const Tracklist = (props) => {
    
    return (
        <div className={styles.tracklist}>
            {props.tracks.map((track) => (
                <Track />
            ))}
        </div>
    )
};

export default Tracklist;