// import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './App-header-link.module.css'

interface IPropsAppHeaderLink extends PropsWithChildren {
    icon: ReactNode;
    to: string;
}

const AppHeaderLink: FC<IPropsAppHeaderLink> = (props: IPropsAppHeaderLink) => {

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
