import React from 'react';
import styles from './Preview.module.css';

function PreviewElem(props) {
    return(
        <div className={styles.PreviewElem}>
            <img className={styles.PreviewImage} src={require(`../../../images/Preview/Preview-${props.image}.png`)}></img>
        </div>
    );
}
export default PreviewElem;