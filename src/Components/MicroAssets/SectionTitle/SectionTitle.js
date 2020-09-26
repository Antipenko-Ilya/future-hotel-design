import React from 'react'
import styles from './SectionTitle.module.css'


export default function SectionTitle({title}) {

    return (
        <div className = {styles.SectionTitle}>
            <div className = {styles.SectionTitleLine}></div>
            <div className = {styles.SectionTitleText}>
                {title}
            </div>
            <div className = {styles.SectionTitleLine}></div>
        </div>
    )
}