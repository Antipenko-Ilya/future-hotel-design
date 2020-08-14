import React from 'react';

//style
import styles from './Project.module.css';
// import globalStyles from '../../../globalStyles.module.css';


function Project(props) {
    return (
        <div className={styles.Project}>
            <div className={styles.ProjectHero}>
              <img className={styles.ProjectHeroImg} src={require('../../images/test/1.JPG')}></img>
            </div>
            <span className={styles.ProjectTitle}>Апарт - отель Citadines City Centre Tbilisi</span>
            <div className={styles.ProjectContent}>
              <div className={styles.ProjectContentElem}>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Расположение</span>
                  <span className={styles.ProjectContentElemText}>Тбилиси, Грузия</span>
                </div>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Тип объетка</span>
                  <span className={styles.ProjectContentElemText}>Апарт - отель</span>
                </div>
              </div>
              <div className={styles.ProjectContentElem}>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Площадь</span>
                  <span className={styles.ProjectContentElemText}>5 600м</span>
                </div>
                <div className={styles.ProjectContentElemBlock}>
                  <span className={styles.ProjectContentElemText}>Год</span>
                  <span className={styles.ProjectContentElemText}>2019</span>
                </div>
              </div>
            </div>
            <div className={styles.ProjectImgs}>
              <img className={styles.ProjectImgsElem} src={require('../../images/test/1.JPG')}></img>
              <div className={styles.ProjectImgsElem}></div>
              {/* <img className={styles.ProjectImgsElem} src={require('../../images/test/2.JPG')}></img> */}
            </div>
        </div>
    )
}

export default Project;
