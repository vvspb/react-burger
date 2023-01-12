import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import AppHeaderLink from './App-header-link'
import styles from './App-header.module.css'

const AppHeader = () => {
    const [state, setState] = useState({
        burgerIcon: 'secondary',
        listIcon: 'secondary',
        profileIcon: 'secondary',
    })

    const handleMouseEnter = (e) => {
        if (e.target.id === 'BurgerIcon') setState({ ...state, burgerIcon: 'primary', profileIcon: 'secondary', listIcon: 'secondary' })
        else if (e.target.id === 'ProfileIcon') setState({ ...state, profileIcon: 'primary', burgerIcon: 'secondary', listIcon: 'secondary' })
        else if (e.target.id === 'ListIcon') setState({ ...state, listIcon: 'primary', profileIcon: 'secondary', burgerIcon: 'secondary' })
    }

    const handleMouseLeave = () => {
        setState({ burgerIcon: 'secondary', profileIcon: 'secondary', listIcon: 'secondary' })
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navUl}>
                        <li className={styles.link}
                            id='BurgerIcon'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <AppHeaderLink icon={<BurgerIcon type={state.burgerIcon} />}>
                                Конструктор
                            </AppHeaderLink>
                        </li>
                        <li className={styles.link}
                            id='ListIcon'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >
                            <AppHeaderLink icon={<ListIcon type={state.listIcon} />}>
                                Лента заказов
                            </AppHeaderLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.wrapperLogo}>
                    <Logo />
                </div>
                <div
                    className={`${styles.link} ${styles.linkProfile}`}
                    id='ProfileIcon'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <AppHeaderLink icon={<ProfileIcon type={state.profileIcon} />}>
                        Личный кабинет
                    </AppHeaderLink>
                </div>
            </div>
        </header>
    )
}
export default AppHeader;