import React from 'react';
import styles from './Projects.module.css';

function ProjectsElem(props) {
    return (
        <div className={styles.ProjectsElem}>
            <span className={styles.ProjectsElemTitle}>{props.name}</span>
            <img src={require(`../../images/Projects/project-1.jpg`)} className={styles.ProjectsElemImg}></img>
            <span className={styles.ProjectsElemDecription}>{props.decription}</span>
        </div>
    )
}

export default ProjectsElem;
