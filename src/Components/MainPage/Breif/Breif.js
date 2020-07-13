//main
import React from 'react';
//components
import BreifSubComponent from './BreifSubComponent/BreifSubComponent'
import SectionTitle from '../../MicroAssets/SectionTitle/SectionTitle'
//style
import styles from './Breif.module.css'
// import globalStyles from '../../../globalStyles.module.css'

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
            <SectionTitle title={'КРАТКО О НАС'}/>
            <div className={styles.BreifMainContent}>
                {breifElements.map(elem => <BreifSubComponent {...elem}/>)}
            </div>
        </div>
    )
}

export default Breif;
