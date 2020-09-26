import React from 'react';
import styles from './Video.module.css';

function Video(props) {
    return(
        <div className={styles.VideoWrap}>
          <video className={styles.Video} preload='true' autoPlay='true' onLoadStart={()=>console.log(121)}>
            
          </video>
        </div>
        
    );
}
export default Video;