import { Logo, BurgerIcon, ListIcon, ProfileIcon, MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import AppHeaderLink from './App-header-link';
import logo from '../../images/logo.svg'

import styles from './App-header.module.css'

const AppHeader = () => {

    return (
        <header className={styles.header}>
            <img hidden = {false} src={logo} alt='Логотип.' className={styles.wrappMobileLogo} width='40' height='40'/>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navUl}>
                        <li
                            className={styles.headeLink}>
                            <AppHeaderLink
                                icon={<BurgerIcon type={'secondary'} />}
                                to={'/'}
                            >
                                Конструктор
                            </AppHeaderLink>
                        </li>
                        <li className={styles.headeLink} >
                            <AppHeaderLink
                                icon={<ListIcon type={'secondary'} />}
                                to={'/feed'}
                            >
                                Лента заказов
                            </AppHeaderLink>
                        </li>
                    </ul>
                </nav>
                <div hidden={false} className={styles.wrapperLogo}>
                    <Link to={'/'}><Logo /></Link>
                </div>
                <div className={`${styles.link} ${styles.headeLinkProfile}`}>
                    <AppHeaderLink
                        icon={<ProfileIcon type={'secondary'} />}
                        to={'/profile'}
                    >
                        Личный кабинет
                    </AppHeaderLink>
                </div>
            </div>
            <button hidden={false} className={styles.navToggle} type='button'>
                <span className={styles.visualHidden}>Открыть меню</span>
            </button>
        </header>
    )
}
export default AppHeader;