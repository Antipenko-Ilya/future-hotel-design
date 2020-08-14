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
          <div className={styles.NavMenuBlock}>
            <NavLink exact to='/projects' className={styles.MenuItem} activeClassName={styles.MenuActive}>
              <span className={styles.MenuItemTitle}>ПРОЕКТЫ</span>
            </NavLink>
            <NavLink to='/team' className={styles.MenuItem} activeClassName={styles.MenuActive}>
              <span className={styles.MenuItemTitle}>КОМАНДА</span>
            </NavLink>
            
          </div>
          <NavLink to='/' className={styles.Logo}>
            <img src={require('../../images/Logo.png')}></img>
          </NavLink>
          <div className={styles.NavMenuBlock}>
            <NavLink to='/projects' className={styles.MenuItem} activeClassName={styles.MenuActive}>
              <span className={styles.MenuItemTitle}>ПОДХОД</span>
            </NavLink>
            <NavLink to='/contacts' className={styles.MenuItem} activeClassName={styles.MenuActive}>
              <span className={styles.MenuItemTitle}>КОНТАКТЫ</span>
            </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Header;
