import React, { useState } from 'react';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

function ProjectsElem(props) {
    const [bgcImg, setBgcImg] = useState(props.images[0]);
    const index = props.index
    // toggleBgc(flag){
    //     setBgcImg(flag ? props.imgHover : props.img);
    // };

    return (
        <div 
            className={styles.ProjectsElem}
        >
            <span className={styles.ProjectsElemTitle}>{props.title}</span>
            <Link to={`/project/?${index}`}>
                <img 
                    src={bgcImg} 
                    className = {styles.ProjectsElemImg}
                    onMouseEnter = { () => {
                        setBgcImg(props.images[1]);
                        console.log(bgcImg);
                    }}
                    onMouseLeave = { () => setBgcImg(props.images[0])}
                />
            </Link>
            <span className={styles.ProjectsElemDecription}>{props.decription}</span>
        </div>
    )
}

export default ProjectsElem;
