import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import styles from './forgot-password-page.module.css'

const ForgotPasswordPage = () => {

    const [valueEmail, setValueEmail] = React.useState('');
    const navigate = useNavigate()


    const onChange = e => {
        setValueEmail(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        api.passwordResetSendEmail(valueEmail)
        .then(data => data.success && navigate('/reset-password'))   
    }

    return (
        <main className={styles.mainForgotPassPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</h2>
            <form>
                <EmailInput
                    onChange={onChange}
                    value={valueEmail}
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
                        onClick={handleClick}
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