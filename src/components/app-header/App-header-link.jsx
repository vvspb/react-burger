// import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

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

export default AppHeaderLink;