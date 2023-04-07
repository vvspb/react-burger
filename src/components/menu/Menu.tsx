import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react'
import AppHeaderLink from '../app-header/App-header-link';
// import NavPanel from '../nav-panel/Nav-panel';
import styles from './Menu.module.css'

interface IMenuProps {
    onClose: () => void;
}
const Menu: FC<IMenuProps> = ({onClose}) => {

    return (
        <>
            <nav className={styles.navContainer}>
                <ul className={styles.navUl}>
                    <li className={styles.headeLink}>
                        <AppHeaderLink
                            icon={<ProfileIcon type={'secondary'} />}
                        >
                            Личный кабинет
                        </AppHeaderLink>
                    </li>
                    <li
                        className={styles.headeLink} onClick={onClose}>
                        <AppHeaderLink
                            icon={<BurgerIcon type={'secondary'} />}
                            to={'/'}
                        >
                            Конструктор бургеров
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
        </>
    )
}

export default Menu;