import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.LangSwitcher}>
          <span className={styles.LangSwitcherDisabled}>
              EN
          </span>
          .
          <span className={styles.LangSwitcherActive}>
              RU
          </span>
      </div>
      <div className={styles.NavMenu}>
          <NavLink exact to='/' className={styles.MenuItem} activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemTitle}>ГЛАВНАЯ</span>
          </NavLink>
          <NavLink to='/projects' className={styles.MenuItem} activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemTitle}>ПРОЕКТЫ</span>
          </NavLink>
          <div >
            <img src={require('../../images/Logo.png')}></img>
          </div>
          <NavLink to='/team' className={styles.MenuItem} activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemTitle}>КОМАНДА</span>
          </NavLink>
          <NavLink to='/contacts' className={styles.MenuItem} activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemTitle}>КОНТАКТЫ</span>
          </NavLink>
      </div>
    </div>
  );
}

export default Header;
