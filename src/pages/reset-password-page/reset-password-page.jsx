import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import styles from './reset-password-page.module.css'

const ResetPasswordPage = () => {
    const navigate = useNavigate()
    const [value, setValue] = React.useState({password:'', token:''})

    const onChange = e => {
        setValue({...value, [e.target.name]:e.target.value})
    }

    const handleClick = (e) => {
        e.preventDefault()
        api.passwordReset(value.password, value.token)
        .then(res => res.success && navigate('/login'))
    }

    return (
        <main className={styles.mainResetPassPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</h2>
            <form>
                <PasswordInput
                    onChange={onChange}
                    value={value.password}
                    placeholder={'Введите новый пароль'}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={onChange}
                    value={value.token}
                    name={'token'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mb-6"
                />
                <div className={styles.wrapperButton}>
                    <Button
                        htmlType="button"
                        type="primary"
                        size="large"
                        onClick={handleClick}
                    >
                        Сохранить
                    </Button>
                </div>
            </form>
            <div className={`${styles.wrapperText} mt-20`}>
                <span className='text text_type_main-small text_color_inactive mr-2' >Вспомнили пароль?</span>
                <Link to={'/login'} className={styles.linkLogin}>Войти</Link>
            </div>
        </main>
    )
}

export default ResetPasswordPage