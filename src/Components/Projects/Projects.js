/*Main*/
import React, {useState} from 'react';

/*Components*/
import ProjectsElem from './ProjectsElem';
import {projectsData} from '../../ProjectsData'
/*Styles*/
import styles from './Projects.module.css';

const projectsMenuData = [
    {
        title: 'ВСЕ ПРОЕКТЫ',
        type: 'all'
    },
    {
        title: 'АРХИТЕКТУРА',
        type: 'arch'
    },
    {
        title: 'ОТЕЛИ',
        type: 'hotel'
    },
    {
        title: 'ОФИСЫ',
        type: 'office'
    },
    {
        title: 'ЧАСТНЫЕ ПРОЕКТЫ',
        type: 'private'
    },
    {
        title: 'МЕД. УЧРЕЖДЕНИЯ',
        type: 'meds'
    },
]


function Projects(props) {
    const [filter, setFilter] = useState('all')

    const ProjectsMenuElem = ({children, type}) => {

        return (
            <span className={styles.ProjectsFilterText} onClick={()=>setFilter(type)}>
                {children}
            </span>
        )
    }

    return (
        <div className={styles.Projects}>
            <div className={styles.ProjectsFilter}>
                {projectsMenuData.map((item, i)=>(
                    <ProjectsMenuElem key={i} type={item.type}>
                        {item.title}
                    </ProjectsMenuElem>
                ))}
            </div>
            <div className={styles.ProjectsContent}>
                {projectsData.map((el, index) => {
                    if (filter==='all')
                        return <ProjectsElem key={index} index={index} {...el} />
                    else if (el.projType===filter)
                        return <ProjectsElem key={index} index={index} {...el} />
                })}
            </div>
        </div>
    )
}

export default Projects;
