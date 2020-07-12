import React from 'react';
import styles from './Breif.module.css';
import globalStyles from '../../../globalStyles.module.css';

function BreifElement(props) {


    return (
        <div className={styles.BreifElement}>
            <div className={styles.BreifElementHero}>
                <div className={styles.BreifElementSubtitle}>{props.subtitle}</div>
                <div className={styles.BreifElementTitle}>{props.title}</div>
            </div>
            <div className={styles.BreifElementDescription}>
                {props.description}
            </div>
        </div>
    )
}

export default BreifElement;
