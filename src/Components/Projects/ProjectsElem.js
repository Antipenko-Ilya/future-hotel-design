import React, { useState } from 'react';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

function ProjectsElem(props) {
    const [bgcImg, setBgcImg] = useState(props.img);
    const index = props.index
    // toggleBgc(flag){
    //     setBgcImg(flag ? props.imgHover : props.img);
    // };

    return (
        <div 
            className={styles.ProjectsElem}
        >
            <span className={styles.ProjectsElemTitle}>{props.name}</span>
            <Link to={`/project/?${index}`}>
                <img 
                    src={require(`../../images/Projects/${bgcImg}`)} 
                    className = {styles.ProjectsElemImg}
                    onMouseEnter = { () => {
                        setBgcImg(props.imgHover);
                        console.log(bgcImg);
                    }}
                    onMouseLeave = { () => setBgcImg(props.img)}
                />
            </Link>
            <span className={styles.ProjectsElemDecription}>{props.decription}</span>
        </div>
    )
}

export default ProjectsElem;
