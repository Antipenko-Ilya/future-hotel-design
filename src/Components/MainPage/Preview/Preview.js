import React from 'react';
import PreviewElem from './PreviewElem';
import {Link} from 'react-router-dom';
import styles from './Preview.module.css';

function Preview(props) {
    return(
        <div className={styles.PreviewWrap}>
            <div className={styles.Preview}>
                {props.projects.map((project) => <PreviewElem {...project}/>)}              
            </div>
            <button className={styles.PreviewButton}><Link to={'/projects'}>БОЛЬШЕ ПРОЕКТОВ</Link></button>
        </div>
        
    );
}
export default Preview;