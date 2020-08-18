import React from 'react';
import styles from './Video.module.css';

function Video(props) {
    return(
        <div className={styles.VideoWrap}>
          <video className={styles.Video} preload='true' autoplay='true'>
            
          </video>
        </div>
        
    );
}
export default Video;