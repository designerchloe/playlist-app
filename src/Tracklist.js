import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

const Tracklist = (props) => {
    
    if (props.tracks.length >= 0) {
        return (
            <div className={styles.tracklist}>
                {props.tracks.map((track) => (
                    <Track inTracklist={true} tracks={props.tracks} title={track.title} artist={track.artist} id={track.id} removeFromPlaylist={props.removeFromPlaylist} />
                ))}
            </div>
        )
    }
    
};

export default Tracklist;