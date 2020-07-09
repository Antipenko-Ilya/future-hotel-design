import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
          <img src={require('../../images/Logo.png')}></img>
      </div>
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
          <NavLink exact to='/' activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemFigure}>01.</span>
            <span className={styles.MenuItemTitle}>ГЛАВНАЯ</span>
          </NavLink>
          <NavLink to='/projects' activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemFigure} >02.</span>
            <span className={styles.MenuItemTitle}>ПРОЕКТЫ</span>
          </NavLink>
          <NavLink to='/stages' activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemFigure}>03.</span>
            <span className={styles.MenuItemTitle}>ЭТАПЫ</span>
          </NavLink>
          <NavLink to='/team' activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemFigure}>04.</span>
            <span className={styles.MenuItemTitle}>КОМАНДА</span>
          </NavLink>
          <NavLink to='/contacts' activeClassName={styles.MenuActive}>
            <span className={styles.MenuItemFigure}>05.</span>
            <span className={styles.MenuItemTitle}>КОНТАКТЫ</span>
          </NavLink>
      </div>
    </div>
  );
}

export default Header;
