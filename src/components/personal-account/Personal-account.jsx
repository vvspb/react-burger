import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchLogoutUserData, fetchUpdateUser} from '../../services/actions/auth-action';

import styles from './Personal-account.module.css';

const PersonalAccount = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.authUserData)
    const [value, setValue] = useState({ password: '', ...userData })

    const [isDisabled, setIsDisabled] = useState(true)

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        setIsDisabled((prevState) => !prevState)
    }

    const handleClick = () => {
        dispatch(fetchLogoutUserData())
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        setValue({ password: '', ...userData })
    }

    const handleSafeClick = (e) => {
        e.preventDefault();
        dispatch(fetchUpdateUser(value.email, value.password, value.name))
        setValue({...value})
    }

    let disableButton = userData.email === value.email && userData.name === value.name && !value.password

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
                    <p className="text text_type_main-default text_color_inactive mt-20 pt-3">
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
                        onChange={onChange}
                        value={value.password}
                        name={'password'}
                        icon="EditIcon"
                    />
                    <div className={styles.wrapperButton}>
                        <Button
                            htmlType="submit"
                            type="secondary"
                            size="medium"
                            onClick={e => handleCancelClick(e)}
                            disabled={disableButton}>
                            Отменить
                        </Button>
                        <Button
                            htmlType="submit"
                            type="primary"
                            size="medium"
                            onClick={e => handleSafeClick(e)}
                            disabled={disableButton}>
                            Сохранить
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default PersonalAccount