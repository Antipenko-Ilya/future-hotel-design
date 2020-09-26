import React from 'react';
import styles from './Team.module.css';
// import globalStyles from '../../../globalStyles.module.css';

function Team(props) {


    return (
        <div className={styles.Team}>
            <div>
                <div className={styles.TeamContent}>
                    <img  className={styles.TeamContentImg} src={require('../../images/Team/olga.jpg')}></img>
                    <div className={styles.TeamContentText}>
                        <div>
                            <div className={styles.TeamContentTitle}>Ольга Гужаускайте</div>
                            <div className={styles.TeamContentSubtitle}>Основатель FHD</div>
                        </div>
                        <div className={styles.TeamContentDescription}>Идейные соображения высшего порядка, а так же постоянное информационно-пропагандисткое обеспечение нашей деятельностиспособствует подготовки и реализации форм развития. Задача организации в особенносьти же сложившаяся структура потребностям</div>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.TeamAnotherContent}>
                    <div className={styles.TeamContentText}>
                        <div>
                            <div className={styles.TeamContentTitle}>Андрей Матков</div>
                            <div className={styles.TeamContentSubtitle}>Руководитель FHD</div>
                        </div>
                        <div className={styles.TeamContentDescription}>Идейные соображения высшего порядка, а так же постоянное информационно-пропагандисткое обеспечение нашей деятельностиспособствует подготовки и реализации форм развития. Задача организации в особенносьти же сложившаяся структура потребностям</div>
                    </div>
                    <img  className={styles.TeamContentImg} src={require('../../images/Team/andrey.jpg')}></img>
                </div>
            </div>
        </div>
    )
}

export default Team;
