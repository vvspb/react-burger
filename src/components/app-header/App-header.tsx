import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import AppHeaderLink from './App-header-link';

import styles from './App-header.module.css'

const AppHeader = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navUl}>
                        <li
                            className={styles.headeLink}>
                            <AppHeaderLink
                                icon={<BurgerIcon type={'secondary'}  />}
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
                <div className={styles.wrapperLogo}>
                    <Link to={'/'}><Logo /></Link>
                </div>
                <div className={`${styles.link} ${styles.headeLinkProfile}`}>
                    <AppHeaderLink
                        icon={<ProfileIcon type={'secondary'}  />}
                        to={'/profile'}
                    >
                        Личный кабинет
                    </AppHeaderLink>
                </div>
            </div>
        </header>
    )
}
export default AppHeader;