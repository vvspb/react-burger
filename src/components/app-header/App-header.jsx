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
        if ( e.target.id === 'BurgerIcon') setState({...state, burgerIcon: 'primary', profileIcon: 'secondary', listIcon: 'secondary'})
           else if ( e.target.id === 'ProfileIcon') setState({...state, profileIcon: 'primary', burgerIcon: 'secondary', listIcon: 'secondary'})
            else if ( e.target.id === 'ListIcon') setState({...state, listIcon: 'primary', profileIcon: 'secondary', burgerIcon: 'secondary'})    
        }

    const handleMouseLeave = () => {
         setState({burgerIcon: 'secondary',  profileIcon: 'secondary', listIcon: 'secondary'})
       }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                  <ul className={styles.navUl}>
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
                <div className={styles.wrapperLogo}>
                    <Logo/>
                </div>
                <div 
                  className={`${styles.link} ${styles.linkProfile}`} 
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