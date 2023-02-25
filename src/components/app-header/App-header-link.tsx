// import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './App-header-link.module.css'

type TPropsAppHeaderLink = {
    children: ReactNode;
    icon: ReactNode,
    to: string
}

const AppHeaderLink: FC<TPropsAppHeaderLink> = (props: TPropsAppHeaderLink) => {

    return (
        <Link
            to={props.to}
            className={styles.link}
        >
            <>
                {props.icon}
                <span className="text text_type_main-default">
                    {props.children}
                </span>
            </>
        </Link>
    )
}

export default AppHeaderLink;
