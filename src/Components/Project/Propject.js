import React, { useEffect, useState } from 'react';
import {projectsData} from '../../ProjectsData'
//style
import styles from './Project.module.css';
import { useParams, useLocation } from 'react-router-dom';


function Project(props) {
    /* initial */
    const location = useLocation()
    const [projectIndex, setProjectIndex] = useState(0)
    useEffect(()=>{
      setProjectIndex(location.search.slice(1))
        window.scrollTo(0,0)
    }, [0])
    
    console.log(projectsData[projectIndex])

    return (
        <div className={styles.Project}>
            <div className={styles.ProjectHero}>
              <img className={styles.ProjectHeroImg} src={projectsData[projectIndex].images[2]}></img>
            </div>
            <span className={styles.ProjectTitle}>{projectsData[projectIndex].title}</span>
            <div className={styles.ProjectContent}>
              <div className={styles.ProjectContentElem}>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Расположение</span>
                  <span className={styles.ProjectContentElemText}>{projectsData[projectIndex].placement}</span>
                </div>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Тип объекта</span>
                  <span className={styles.ProjectContentElemText}>{projectsData[projectIndex].type}</span>
                </div>
              </div>
              <div className={styles.ProjectContentElem}>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Площадь</span>
                  <span className={styles.ProjectContentElemText}>{projectsData[projectIndex].area}</span>
                </div>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Год</span>
                  <span className={styles.ProjectContentElemText}>{projectsData[projectIndex].year}</span>
                </div>
              </div>
            </div>
            <div className={styles.ProjectImgs}>
              <img className={styles.ProjectImgsElem} src={projectsData[projectIndex].images[3]} ></img>
              <div className={styles.ProjectImgsElem} style={ { backgroundImage: `url(${projectsData[projectIndex].images[4]}` }}></div>
            </div>
            <img className={styles.Project__WideImage} src={projectsData[projectIndex].images[5]}></img>
            <div className={styles.ProjectImgs_modif}>
              <div className={styles.ProjectImgsElem} style={ { backgroundImage: `url(${projectsData[projectIndex].images[6]}` }}></div>
              <img className={styles.ProjectImgsElem} src={projectsData[projectIndex].images[7]} ></img>
            </div>
            {/*<img className={styles.Project__WideImage} src={projectsData[projectIndex].images[8]}></img>*/}
            {/*<div className={styles.ProjectImgs}>*/}
            {/*  <img className={styles.ProjectImgsElem} src={projectsData[projectIndex].images[9]} ></img>*/}
            {/*  <div className={styles.ProjectImgsElem} style={ { backgroundImage: `url(${projectsData[projectIndex].images[10] || projectsData[projectIndex].images[1]}` }}></div>*/}
            {/*</div>*/}
            {/*<img className={styles.Project__WideImage} src={projectsData[projectIndex].images[11]}></img>*/}
            {/*{projectsData[projectIndex].images[12] && <div className={styles.ProjectImgs_modif}>*/}
            {/*  <div className={styles.ProjectImgsElem} style={ { backgroundImage: `url(${projectsData[projectIndex].images[12]}` }}></div>*/}
            {/*  <img className={styles.ProjectImgsElem} src={projectsData[projectIndex].images[13] || projectsData[projectIndex].images[1]} ></img>*/}
            {/*</div>}*/}
            {/*{projectsData[projectIndex].images[14] && <img className={styles.Project__WideImage} src={projectsData[projectIndex].images[14]}></img>}*/}
            {/* <div className={styles.ProjectImgs}>
              <img className={styles.ProjectImgsElem} src={projectsData[projectIndex].images[15]} ></img>
              <div className={styles.ProjectImgsElem} style={ { backgroundImage: `url(${projectsData[projectIndex].images[16]}` }}></div>
            </div> */}
        </div>
    )
}

export default Project;
