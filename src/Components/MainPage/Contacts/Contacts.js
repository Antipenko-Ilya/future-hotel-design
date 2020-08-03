import React from 'react';

import styles from './Contacts.module.css';

function Contacts(props) {
    return(
        <div className={styles.Contacts}>
            <span className={styles.ContactsTitle}>КОНТАКТЫ</span>
            <div className={styles.ContactsInfo}>
                <div className={styles.ContactsInfoBlock}>
                    <div className={styles.ContactsInfoElem}>
                        <img src={require('../../../images/Contact/elem-2.png')}></img>
                        <span className={styles.ContactsInfoElemText}>420032<br/>г. Москва, ул. Пваыдат, 12</span>
                    </div>
                    <div className={styles.ContactsInfoElem}>
                        <img src={require('../../../images/Contact/elem-1.png')}></img>
                        <span className={styles.ContactsInfoElemText}>+7495-243-34-24</span>
                    </div> 
                </div>
                <div className={styles.ContactsInfoBlock}>
                    <div className={styles.ContactsInfoElem}>
                        <img src={require('../../../images/Contact/elem-4.png')}></img>
                        <span className={styles.ContactsInfoElemText}>facebook.com/ссылканафейбук</span>
                    </div>
                    <div className={styles.ContactsInfoElem}>
                        <img src={require('../../../images/Contact/elem-3.png')}></img>
                        <span className={styles.ContactsInfoElemText}>instagram.com/ссылканаинст</span>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Contacts;