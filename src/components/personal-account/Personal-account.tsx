import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { SyntheticEvent, useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { useSelector, useDispatch } from '../../hooks/hooks';
import NavPanel from '../nav-panel/Nav-panel';
import { fetchUpdateUser } from '../../services/actions/auth-action';

import styles from './Personal-account.module.css';


const PersonalAccount = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.authUserData)
    const {values, handleChange, setValues} = useForm({password:'', ...userData});

    const [isDisabled, setIsDisabled] = useState(true)

    const inputRef = React.useRef<HTMLInputElement>(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current?.focus(), 0)
        setIsDisabled((prevState) => !prevState)
    }

    const handleCancelClick = (e: SyntheticEvent) => {
        e.preventDefault();
        setValues({ password: '', ...userData })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(fetchUpdateUser(values.email, values.password, values.name))
        setValues({...values})
    }

    let disableButton: boolean = userData.email === values.email && userData.name === values.name && !values.password

    return (
        <main className={styles.main}>
            <div className={styles.wrapperProfile}>
                <NavPanel/>
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