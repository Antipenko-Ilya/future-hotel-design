import React from 'react';

import styles from './Contacts.module.css';

function Contacts(props) {
    return(
        <div className={styles.Contacts}>
            {/* <span className={styles.ContactsTitle}>КОНТАКТЫ</span> */}
            <div className={styles.ContactsInfo}>
                <div className={styles.ContactsInfoBlock}>
                    <div className={styles.ContactsInfoElem}>
                        {/* <img src={require('../../../images/Contact/elem-2.png')}></img> */}
                        <span className={styles.ContactsInfoElemText}>ул. Прчистенка 40.2,<br/> 119034 г.Москва</span>
                    </div>
                </div>
                <div className={styles.ContactsInfoBlock}>
                    <div style={{display:'flex', flexDirection: 'column'}} className={styles.ContactsInfoElem}>
                        <span className={styles.ContactsInfoElemText}>+7(495)-902-61-81</span>
                    </div> 
                    <div style={{display:'flex', flexDirection: 'column'}} className={styles.ContactsInfoElem}>
                        <span className={styles.ContactsInfoElemText}>+7(495)-902-61-91</span>
                    </div> 
                </div>
                <div className={styles.ContactsInfoBlock}>
                    <div className={styles.ContactsInfoElem}>
                        {/* <img src={require('../../../images/Contact/elem-4.png')}></img> */}
                        <span className={styles.ContactsInfoElemText}>facebook.com/futurehoteldesign/</span>
                    </div>
                    <div className={styles.ContactsInfoElem}>
                        {/* <img src={require('../../../images/Contact/elem-3.png')}></img> */}
                        <span className={styles.ContactsInfoElemText}>instagram.com/@futurehoteldesign</span>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Contacts;