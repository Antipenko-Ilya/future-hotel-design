import React from 'react';

import BreifElement from './BreifElement';

import styles from './Breif.module.css';
import globalStyles from '../../../globalStyles.module.css';

const breifElements = [
    {
        title: 'АРХИТЕКТУРА',
        subtitle: 'Эскизная',
        description: 'Првлфыаы ароар рыовапрыв  дфыао  апывоаыв оырв ы ыра ап ыларвоарвоа арворвопв лваврпа вроава равоарва воавра'
    },
    {
        title: 'ДИЗАЙН',
        subtitle: 'Интерьерный',
        description: 'Првлфыаы ароар рыовапрыв  дфыао  апывоаыв оырв ы ыра ап ыларвоарвоа арворвопв лваврпа вроава равоарва воавра'
    },
    {
        title: 'ЭКСПРЕСС',
        subtitle: 'Качественный',
        description: 'Првлфыаы ароар рыовапрыв  дфыао  апывоаыв оырв ы ыра ап ыларвоарвоа арворвопв лваврпа вроава равоарва воавра'
    }
]

function Breif() {


    return (
        <div className={styles.Breif}>
            <div className = {globalStyles.SectionTitle}>
                <div className = {globalStyles.SectionTitleLine}></div>
                <div className = {globalStyles.SectionTitleText}>
                    КРАТКО О НАС
                </div>
                <div className = {globalStyles.SectionTitleLine}></div>
            </div>
            <div className = {styles.BreifElements}>
                {breifElements.map(elem => <BreifElement {...elem}/>)}
            </div>
        </div>
    )
}

export default Breif;
