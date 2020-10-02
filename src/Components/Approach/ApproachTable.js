import React from 'react';
import styles from './Approach.module.css';

function ApproachTable(props) {
    return (
        <div className={styles.ApproachTable}>
            <div className={styles.ApproachTableTitle}>{props.name}</div>
            {props.content.map((el, i) => {
                return (
                    <div key={i} className={styles.ApproachTableWrap}>
                        <div className={styles.ApproachTableText}>{props.flag ? el.text : el.id}</div>
                        <div className={styles.ApproachTableId}>{props.flag ? el.id : el.text}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default ApproachTable;
