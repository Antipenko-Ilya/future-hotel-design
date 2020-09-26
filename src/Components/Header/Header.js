import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import burger from '../../images/burger.png'
import classNames from 'classnames'

function Header() {
    const [showMenuState, setShowMenuState] = useState(false)
    const [mobileMenuClasses, setMobileMenuClasses] = useState('mobileMenu')
    const openMenu = () => {
        setMobileMenuClasses('mobileMenu mobileMenu_visible')
        setShowMenuState(true)
    }
    const closeMenu = () => {
        setMobileMenuClasses('mobileMenu mobileMenu_hidden')
        setTimeout(()=>setShowMenuState(false),1000)
    }

    return (
        <div className='Header'>
            <div className={'LangSwitcher'}>
                  <span className={'LangSwitcherDisabled'}>
                      EN
                  </span>
                        .
                        <span className={'LangSwitcherActive'}>
                      RU
                  </span>
            </div>

            <div className={'NavMenu'}>

                {showMenuState && <div className={mobileMenuClasses}>
                    <NavLink exact to='/projects' className={'MenuItem'} activeClassName={'MenuActive'}>
                        <span className={'MenuItemTitle'}>ПРОЕКТЫ</span>
                    </NavLink>
                    <NavLink to='/team' className={'MenuItem'} activeClassName={'MenuActive'}>
                        <span className={'MenuItemTitle'}>КОМАНДА</span>
                    </NavLink>
                    <NavLink to='/approach' className={'MenuItem'} activeClassName={'MenuActive'}>
                        <span className={'MenuItemTitle'}>ПОДХОД</span>
                    </NavLink>
                    <a href='#contact' className={'MenuItem'}>
                        <span className={'MenuItemTitle'}>КОНТАКТЫ</span>
                    </a>
                    <div className='NavMenu__close' onClick={closeMenu}>✕</div>
                </div>}

                <div className={'NavMenuBlock'}>
                    <NavLink exact to='/projects' className={'MenuItem'} activeClassName={'MenuActive'}>
                        <span className={'MenuItemTitle'}>ПРОЕКТЫ</span>
                    </NavLink>
                    <NavLink to='/team' className={'MenuItem'} activeClassName={'MenuActive'}>
                        <span className={'MenuItemTitle'}>КОМАНДА</span>
                    </NavLink>

                </div>
                <NavLink to='/' className={'Logo'}>
                    <img src={require('../../images/Logo.png')}/>
                </NavLink>

                <div className={'NavMenuBlock'}>
                    <NavLink to='/approach' className={'MenuItem'} activeClassName={'MenuActive'}>
                        <span className={'MenuItemTitle'}>ПОДХОД</span>
                    </NavLink>
                    <a href='#contact' className={'MenuItem'}>
                        <span className={'MenuItemTitle'}>КОНТАКТЫ</span>
                    </a>
                </div>

                <img className='Burger' onClick={openMenu} src={burger}/>
            </div>
        </div>
    );
}

export default Header;
