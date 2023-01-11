// import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';

const AppHeaderLink = (props) => {

    return (
        <>
            {props.icon}
            <p className="text text_type_main-default">
                {props.children}
            </p>
        </>
    )
}

AppHeaderLink.propTypes = {
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
}
export default AppHeaderLink;