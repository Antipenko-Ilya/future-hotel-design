import React from 'react';

import styles from './Contacts.module.css';

function Contacts(props) {
    return(
        <div id='contact' className={styles.ContactsWrap}>
            <div className={styles.Contacts}>
                <div className={styles.ContactsInfo}>
                    <div className={styles.ContactsInfoBlock}>
                        <div className={styles.ContactsInfoElemStart}>
                            <span> г. Москва<br/>ул. Пречистенка 40/2,<br/> 119034</span>
                        </div>
                    </div>
                    <div className={styles.ContactsInfoBlock}>
                        <div className={styles.ContactsInfoElemCenter}>
                            <span>+7(495)-902-61-81</span>
                        </div> 
                        <div className={styles.ContactsInfoElemCenter}>
                            <span>+7(495)-902-61-91</span>
                        </div> 
                    </div>
                    <div className={styles.ContactsInfoBlock}>
                        <div className={styles.ContactsInfoElemEnd}>
                            <span className={styles.ContactsInfoElemText}>Facebook</span>
                        </div>
                        <div className={styles.ContactsInfoElemEnd}>
                            <span className={styles.ContactsInfoElemText}>Instagram</span>
                        </div> 
                        <div className={styles.ContactsInfoElemEnd}>
                            <span className={styles.ContactsInfoElemText}>Youtube</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts;