import React from 'react';
import styles from './Team.module.css';
import globalStyles from '../../../globalStyles.module.css';

function TeamElem(props) {


    return (
        <div className={styles.TeamElem}>
            <img src={props.img} className={styles.TeamElemImg}/>
        </div>
    )
}

export default TeamElem;
