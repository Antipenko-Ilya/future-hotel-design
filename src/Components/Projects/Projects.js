/*Main*/
import React from 'react';

/*Components*/
import ProjectsElem from './ProjectsElem';
import {projectsData} from '../../ProjectsData'
/*Styles*/
import styles from './Projects.module.css';

const arr = [
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-1.jpg',
        imgHover: 'project-2.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-3.jpg',
        imgHover: 'project-4.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-5.JPG',
        imgHover: 'project-6.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-7.jpg',
        imgHover: 'project-8.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-9.jpg',
        imgHover: 'project-10.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-11.jpg',
        imgHover: 'project-12.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-1.jpg',
        imgHover: 'project-2.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-3.jpg',
        imgHover: 'project-4.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-5.JPG',
        imgHover: 'project-6.jpg'
    },
    {
        name: 'Яхт-школа г. Геленджик',
        decription: 'Описание',
        img: 'project-7.jpg',
        imgHover: 'project-8.jpg'
    }
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
                {projectsData.map((el, index) => <ProjectsElem index={index} {...el} />)}
            </div>
        </div>
    )
}

export default Projects;
