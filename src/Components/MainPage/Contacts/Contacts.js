import React from "react";
import { Link } from "react-router-dom";

import styles from "./Contacts.module.css";

function Contacts(props) {
  return (
    <div id="contact" className={styles.ContactsWrap}>
      <div className={styles.Contacts}>
        <div className={styles.ContactsInfo}>
          <div className={styles.ContactsInfoBlock}>
            <div className={styles.ContactsInfoElemStart}>
              <span>
                {" "}
                г. Москва
                <br />
                ул. Пречистенка 40/2,
                <br /> 119034
              </span>
            </div>
          </div>
          <div className={styles.ContactsInfoBlock}>
            <div className={styles.ContactsInfoElemCenter}>
              <span>+7(495)-902-61-81</span>
            </div>
            <div className={styles.ContactsInfoElemCenter}>
              <span>+7(495)-902-61-91</span>
            </div>
            <div className={styles.ContactsInfoElemCenter}>
              <span>info@futurehoteldesign.ru</span>
            </div>
          </div>
          <div className={styles.ContactsInfoBlock}>
            <div>
              <a
                className={styles.ContactsInfoElemEnd}
                href={"https://www.facebook.com/futurehoteldesign/"}
              >
                <span className={styles.ContactsInfoElemText}>Facebook</span>
              </a>
            </div>
            <div>
              <a
                className={styles.ContactsInfoElemEnd}
                href={"https://www.instagram.com/futurehoteldesign/"}
              >
                <span className={styles.ContactsInfoElemText}>Instagram</span>
              </a>
            </div>
            <div>
              <a
                className={styles.ContactsInfoElemEnd}
                href={
                  "https://www.youtube.com/channel/UCL9LcCY4m4sJwmEs0xeZM6A/videos"
                }
              >
                <span className={styles.ContactsInfoElemText}>Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
