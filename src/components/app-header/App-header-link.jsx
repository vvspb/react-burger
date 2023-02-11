// import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './App-header-link.module.css'

const AppHeaderLink = (props) => {

    return (
        <NavLink
            to={props.to}
            className={styles.link}>
           {props.icon}
            <span className="text text_type_main-default">
                {props.children}
            </span>
        </NavLink>
    )
}

AppHeaderLink.propTypes = {
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
}
export default AppHeaderLink;