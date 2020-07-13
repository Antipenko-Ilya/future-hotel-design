import React from 'react';
import styles from './BreifSubComponent.module.css'

function BreifSubComponent(props) {


    return (
        <div className={styles.BreifSubComponent}>
            <div className={styles.Title}>
                <div className={styles.TitleSmallText}>{props.subtitle}</div>
                <div className={styles.TitleBigText}>{props.title}</div>
            </div>

            <div className={styles.MainText}>
            {props.description}
            </div>
        </div>
    )
}

export default BreifSubComponent;
