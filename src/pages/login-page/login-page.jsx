import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login-page.module.css'

const LoginPage = () => {

    const [valueEmail, setValueEmail] = React.useState('')
    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }

    const [valuePass, setValuePass] = React.useState('')
    const onChangePass = e => {
        setValuePass(e.target.value)
    }
    return (
        <main className={styles.mainLoginPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Вход</h2>
            <EmailInput
                onChange={onChangeEmail}
                value={valueEmail}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChangePass}
                value={valuePass}
                name={'password'}
                extraClass="mb-6"
            />
            <div className={styles.wrapperButton}>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                >
                    Войти
                </Button>
            </div>
            <div className={`${styles.wrapperText} mt-20 mb-4`}>
                <span className='text text_type_main-small text_color_inactive mr-2' >Вы — новый пользователь?</span>
                <Link to={'/register'}className={styles.link} >Зарегистрироваться</Link>
            </div>
            <div className={styles.wrapperText}>
                <span className='text text_type_main-small text_color_inactive mr-2' >Забыли пароль?</span>
                <Link to={'/forgot-password'} className={styles.link}>Восстановить пароль</Link>
            </div>
        </main>
    )
}

export default LoginPage