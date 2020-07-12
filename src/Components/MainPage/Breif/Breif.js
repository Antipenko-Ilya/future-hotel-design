import React from 'react';
<<<<<<< HEAD

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
=======
import styles from './Breif.module.css'
import BreifSubComponent from './BreifSubComponent/BreifSubComponent'
import SectionTitle from '../../MicroAssets/SectionTitle/SectionTitle'
import globalStyles from '../../../globalStyles.module.css'
>>>>>>> abfc8006833d4f24a936ff4810e4eb659b6c8051

function Breif() {


    return (
        <div className={styles.Breif}>
            <SectionTitle title={'КРАТКО О НАС'}/>

            <div className={styles.BreifMainContent}>
                <BreifSubComponent/>
                <BreifSubComponent/>
                <BreifSubComponent/>
            </div>
            <div className = {styles.BreifElements}>
                {breifElements.map(elem => <BreifElement {...elem}/>)}
            </div>
        </div>
    )
}

export default Breif;
