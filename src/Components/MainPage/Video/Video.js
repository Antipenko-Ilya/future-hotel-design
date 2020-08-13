import React from 'react';
import styles from './Video.module.css';

function Video(props) {
    return(
        <div className={styles.VideoWrap}>
          <video className={styles.Video} preload='true' autoplay='true'>
            <source src={require('../../../video/file-1.mp4')}/>
          </video>
        </div>
        
    );
}
export default Video;