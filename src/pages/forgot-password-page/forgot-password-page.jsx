import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './forgot-password-page.module.css'

const ForgotPasswordPage = () => {

    const [valueEmail, setValueEmail] = React.useState('');

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }

    return (
        <main className={styles.mainForgotPassPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</h2>
            <EmailInput
                onChange={onChangeEmail}
                value={valueEmail}
                name={'email'}
                placeholder={'Укажите e-mail'}
                isIcon={false}
                extraClass="mb-6"
            />
            <div className={styles.wrapperButton}>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                >
                    Восстановить
                </Button>
            </div>
            <div className={`${styles.wrapperText} mt-20`}>
                <span className='text text_type_main-small text_color_inactive mr-2' >Вспомнили пароль?</span>
                <Link to={'/login'} className={styles.linkLogin}>Войти</Link>
            </div>
        </main>
    )
}

export default ForgotPasswordPage