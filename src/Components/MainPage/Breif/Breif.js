import React from 'react';
import styles from './Breif.module.css'
import globalStyles from '../../../globalStyles.module.css'

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
        </div>
    )
}

export default Breif;
