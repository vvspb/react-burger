import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from '../../hooks/hooks';
import { fetchLogoutUserData } from '../../services/actions/auth-action';

import styles from './Nav-panel.module.css'


const NavPanel = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchLogoutUserData())
    }

    const textStyle: string = 'text text_type_main-medium';
    
    return (
        <nav className={styles.navProfile}>
            <ul className={styles.linkProfile}>
                <li className={styles.navLi}>
                    <NavLink
                        to={'/profile'}
                        className={({ isActive }) => isActive ? `${styles.activeClasses} ${textStyle}` : `${styles.inactiveClasses} ${textStyle}`}
                        end>
                        Профиль
                    </NavLink>
                </li>
                <li className={styles.navLi}>
                    <NavLink
                        to={'/profile/orders'}
                        className={({ isActive }) => isActive ? `${styles.activeClasses} ${textStyle}` : `${styles.inactiveClasses} ${textStyle}`}
                        end>
                        История заказов
                    </NavLink>
                </li>
                <li className={styles.navLi}>
                    <NavLink
                        to={'/'}
                        className={`${styles.inactiveClasses} ${textStyle}`}
                        onClick={handleClick}
                        replace
                    >
                        Выход
                    </NavLink>
                </li>
            </ul>
            <p className="text text_type_main-default text_color_inactive mt-20 pt-3">
                В этом разделе вы можете <br />
                изменить свои персональные данные
            </p>
        </nav>
    )
}

export default NavPanel