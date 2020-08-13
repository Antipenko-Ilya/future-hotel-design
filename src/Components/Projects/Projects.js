/*Main*/
import React from 'react';

/*Components*/
import ProjectsElem from './ProjectsElem';

/*Styles*/
import styles from './Projects.module.css';

const arr = [
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: '../../images/Projects/project-1.jpg',
        imgHover: '../../images/Projects/project-1.jpg'
    },
]

function Projects(props) {


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
                {arr.map((el) => <ProjectsElem {...el} />)}
            </div>
        </div>
    )
}

export default Projects;
