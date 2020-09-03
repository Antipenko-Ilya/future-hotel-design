/*Main*/
import React, {useState} from 'react';

/*Components*/
import ProjectsElem from './ProjectsElem';
import {projectsData} from '../../ProjectsData'
/*Styles*/
import styles from './Projects.module.css';

function Projects(props) {
    const [filter, setFilter] = useState('all')

    return (
        <div className={styles.Projects}>
            <div className={styles.ProjectsFilter}>
                <span className={styles.ProjectsFilterText}>ВСЕ ПРОЕКТЫ</span>
                <span className={styles.ProjectsFilterText}>АРХИТЕКТУРА</span>
                <span className={styles.ProjectsFilterText}>ОТЕЛИ</span>
                <span className={styles.ProjectsFilterText}>ОФИСЫ</span>
                <span className={styles.ProjectsFilterText}>ЧАСТНЫЕ ПРОЕКТЫ</span>
                <span className={styles.ProjectsFilterText}>МЕД. УЧРЕЖДЕНИЯ</span>
            </div>
            <div className={styles.ProjectsContent}>
                {projectsData.map((el, index) => {
                    if (filter==='all')
                        return <ProjectsElem index={index} {...el} />
                    else if (el.type===filter)
                        return <ProjectsElem index={index} {...el} />
                })}
            </div>
        </div>
    )
}

export default Projects;
