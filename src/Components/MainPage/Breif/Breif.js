import React from 'react';
import styles from './Breif.module.css'
import BreifSubComponent from './BreifSubComponent/BreifSubComponent'
import SectionTitle from '../../MicroAssets/SectionTitle/SectionTitle'
import globalStyles from '../../../globalStyles.module.css'

function Breif() {


    return (
        <div className={styles.Breif}>
            <SectionTitle title={'КРАТКО О НАС'}/>

            <div className={styles.BreifMainContent}>
                <BreifSubComponent/>
                <BreifSubComponent/>
                <BreifSubComponent/>
            </div>
        </div>
    )
}

export default Breif;
