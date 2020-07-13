import React from 'react';
import styles from './Stages.module.css';
// import globalStyles from '../../../globalStyles.module.css';

function StagesElem(props) {


    return (
        <div className={styles.StagesElem}>
            <img src={props.img} className={styles.StagesElemImg} />
            <div className={styles.StagesElemContent}>
                <div className={styles.StagesElemtTitle}>{props.title}</div>
                <div className={styles.StagesElemDescription}>{props.description}</div>
            </div>
        </div>
    )
}

export default StagesElem;
