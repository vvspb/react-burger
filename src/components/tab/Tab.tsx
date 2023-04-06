import React, {FC, useCallback} from 'react';
import styles from './Tab.module.css';

const Tab: FC<
    React.PropsWithChildren<{
        active: boolean;
        value: string;
        onClick?: (value: string) => void;
    }>
> = ({ active, value, children, onClick: handleClick }) => {

    const style = 'pt-4 pr-10 pb-4 pl-10 noselect'

    const onClick = useCallback(() => {
        if (typeof handleClick === 'function') {
            handleClick(value);
        }
    }, [handleClick, value]);

    return (
        <div className={`${styles.tab} ${style} ${active && styles.tabTypeCurrent}`} onClick={onClick}>
            <span className="text text_type_main-default">{children}</span>
        </div>
    );
};

export default Tab;