import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import api from '../../utils/api';
import styles from './forgot-password-page.module.css'

const ForgotPasswordPage = () => {

    const {values, handleChange} = useForm({
        email: '',
        name: '',
        password: ''
    });
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        api.passwordResetSendEmail(values.email)
        .then((data) => data.message === 'Reset email sent' && navigate('/reset-password', {state: {from:location}}))   
    }

    return (
        <main className={styles.mainForgotPassPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</h2>
            <form onSubmit={handleSubmit}>
                <EmailInput
                    onChange={handleChange}
                    value={values.email}
                    name={'email'}
                    placeholder={'Укажите e-mail'}
                    isIcon={false}
                    extraClass="mb-6"
                />
                <div className={styles.wrapperButton}>
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="large"
                    >
                        Восстановить
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

export default ForgotPasswordPage