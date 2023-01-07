import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import styles from './App-header.module.css'

const AppHeader = () => {
    const [state, setState] = useState({
        burgerIcon: 'secondary',
        listIcon: 'secondary',
        profileIcon: 'secondary',
    })

    const handleMouseEnter = (e) => {
        if ( e.target.id === 'BurgerIcon') setState({...state, burgerIcon: 'primary'})
           else if ( e.target.id === 'ProfileIcon') setState({...state, profileIcon: 'primary'})
            else if ( e.target.id === 'ListIcon') setState({...state, listIcon: 'primary'})    
        }

    const handleMouseLeave = () => {
         setState({burgerIcon: 'secondary',  profileIcon: 'secondary', listIcon: 'secondary'})
       }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                  <ul className={styles.nav__ul}>
                    <li className={styles.link} 
                        id='BurgerIcon'  
                        onMouseEnter ={handleMouseEnter} 
                        onMouseLeave ={handleMouseLeave}
                        >
                        <BurgerIcon type={state.burgerIcon}/> 
                        <p className="text text_type_main-default">
                            Конструктор
                        </p>
                    </li>
                    <li className={styles.link} 
                        id='ListIcon'  
                        onMouseEnter ={handleMouseEnter} 
                        onMouseLeave ={handleMouseLeave}>
                        <ListIcon type={state.listIcon}/>
                        <p className={`${styles.title} text text_type_main-default`}>
                            Лента заказов
                        </p>
                    </li>
                    </ul>
                </nav>
                <div className={styles.wrapper__logo}>
                    <Logo/>
                </div>
                <div 
                  className={`${styles.link} ${styles.link_profile}`} 
                  id='ProfileIcon'    
                  onMouseEnter ={handleMouseEnter}
                  onMouseLeave ={handleMouseLeave}
                  >
                    <ProfileIcon type={state.profileIcon} />
                    <p className={`${styles.title} text text_type_main-default`}>
                        Личный кабинет
                    </p>
                </div>
            </div>
        </header>
    )
}
export default AppHeader;