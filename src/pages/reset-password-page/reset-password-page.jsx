import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './reset-password-page.module.css'

const ResetPasswordPage = () => {

    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }

    const [valueCodeFromEmail, setValueCodeFromEmail] = React.useState('')

    const onChangeCode = e => {
        setValueCodeFromEmail(e.target.value)
    }

    return (
        <main className={styles.mainResetPassPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</h2>
            <PasswordInput
                onChange={onChange}
                value={valueCodeFromEmail}
                placeholder={'Введите новый пароль'}
                name={'password'}
                extraClass="mb-6"
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={e => onChangeCode(e.target.value)}
                value={value}
                name={'name'}
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
                >
                    Сохранить
                </Button>
            </div>
            <div className={`${styles.wrapperText} mt-20`}>
                <span className='text text_type_main-small text_color_inactive mr-2' >Вспомнили пароль?</span>
                <Link to={'/login'} className={styles.linkLogin}>Войти</Link>
            </div>
        </main>
    )
}

export default ResetPasswordPage