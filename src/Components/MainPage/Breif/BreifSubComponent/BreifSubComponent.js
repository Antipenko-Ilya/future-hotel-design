import React from 'react';
import styles from './BreifSubComponent.module.css'

function BreifSubComponent() {


    return (
        <div className={styles.BreifSubComponent}>
           <div className={styles.Title}>
               <div className={styles.TitleSmallText}>Эскизная</div>
               <div className={styles.TitleBigText}>Архитектура</div>
           </div>

            <div className={styles.MainText}>
                TextTextTExtTextTextTExtvTextTextTExt
                TextTextTExtTextTextTExtTextTextTExt
                TextTextTExtTextTextTExtTextTextTExt
            </div>
        </div>
    )
}

export default BreifSubComponent;
