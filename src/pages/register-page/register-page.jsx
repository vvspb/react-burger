import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './register-page.module.css'


const RegisterPage = () => {

    const [valueEmail, setValueEmail] = React.useState('');
    const [valuePass, setValuePass] = React.useState('');
    const [valueName, setValueName] = React.useState('');

    const inputRef = React.useRef(null);

    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }

    const onChangePass = e => {
        setValuePass(e.target.value)
    }

    return (
        <main className={styles.mainLoginPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Зарегестрироваться</h2>

            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setValueName(e.target.value)}
                value={valueName}
                name={'name'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
            />
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
                    Зарегестрироваться
                </Button>
            </div>
            <div className={`${styles.wrapperText} mt-20`}>
                <span className='text text_type_main-small text_color_inactive mr-2' >Уже зарегистрированы?</span>
                <Link to={'/login'} className={styles.linkLogin }>Войти</Link>
            </div>
        </main>
    )
}

export default RegisterPage