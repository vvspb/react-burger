import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { fetchLogoutUserData, fetchUpdateUser} from '../../services/actions/auth-action';
import { IAuthReducer } from '../../services/reducers/auth-reducer';

import styles from './Personal-account.module.css';

const PersonalAccount = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector((state: {authUserData: IAuthReducer}) => state.authUserData)
    const {values, handleChange, setValues} = useForm({password:'', ...userData});

    const [isDisabled, setIsDisabled] = useState(true)

    const inputRef = React.useRef<HTMLInputElement>(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current?.focus(), 0)
        setIsDisabled((prevState) => !prevState)
    }
 // типизация на 5 спринте
    const handleClick = () => {
        dispatch<any>(fetchLogoutUserData())
    }

    const handleCancelClick = (e: SyntheticEvent) => {
        e.preventDefault();
        setValues({ password: '', ...userData })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch<any>(fetchUpdateUser(values.email, values.password, values.name))
        setValues({...values})
    }

    let disableButton: boolean = userData.email === values.email && userData.name === values.name && !values.password

    const textStyle: string = 'text text_type_main-medium';

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
                <form className={styles.inputFrofile}  onSubmit={handleSubmit}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={handleChange}
                        ref={inputRef}
                        icon={'EditIcon'}
                        value={values.name}
                        name={'name'}
                        error={false}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        disabled={isDisabled}
                    />
                    <EmailInput
                        onChange={handleChange}
                        value={values.email}
                        name={'email'}
                        placeholder="Логин"
                        isIcon={true}
                    />
                    <PasswordInput
                        onChange={handleChange}
                        value={values.password}
                        name={'password'}
                        icon="EditIcon"
                    />
                    <div className={styles.wrapperButton}>
                        <Button
                            htmlType="button"
                            type="secondary"
                            size="medium"
                            onClick={handleCancelClick}
                            disabled={disableButton}>
                            Отменить
                        </Button>
                        <Button
                            htmlType="submit"
                            type="primary"
                            size="medium"
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