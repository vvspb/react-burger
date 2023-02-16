import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchLogoutUserData } from '../../services/actions/auth-action';

import styles from './Personal-account.module.css';

const PersonalAccount = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.authUserData)
    const [value, setValue] = useState(userData)
    const [valuePass, setPassValue] = useState('password')
    const [isDisabled, setIsDisabled] = useState(true)

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const onChangePass = e => {
        setPassValue(e.target.value)
    }

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        setIsDisabled((prevState) => !prevState)
    }

    const handleClick = () => {
        console.log('worked')
        dispatch(fetchLogoutUserData())
    }

    const textStyle = 'text text_type_main-medium';

    return (
        <main className={styles.main}>
            <div className={styles.wrapperProfile}>
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
                    <p className="text text_type_main-default text_color_inactive mt-20">
                        В этом разделе вы можете <br />
                        изменить свои персональные данные
                    </p>
                </nav>
                <form className={styles.inputFrofile}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChange}
                        ref={inputRef}
                        icon={'EditIcon'}
                        value={value.name}
                        name={'name'}
                        error={false}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        disabled={isDisabled}
                    />
                    <EmailInput
                        onChange={onChange}
                        value={value.email}
                        name={'email'}
                        placeholder="Логин"
                        isIcon={true}
                    />
                    <PasswordInput
                        onChange={onChangePass}
                        value={valuePass}
                        name={'password'}
                        icon="EditIcon"
                    />
                </form>
            </div>
        </main>
    )
}

export default PersonalAccount