import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FormEvent, useCallback } from 'react';
import { useDispatch } from '../../hooks/hooks';
import { Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { fetchAuthUserData } from '../../services/actions/auth-action';
import styles from './login-page.module.css'

const LoginPage = () => {

    const dispatch= useDispatch()

    const {values, handleChange} = useForm({
        email: '', 
        password: '',
        name: ''
    });
  
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (values.email && values.password) {
            dispatch(fetchAuthUserData(values.email, values.password))
        }
    }, [dispatch, values.email, values.password])

    return (
        <main className={styles.mainLoginPage}>
                    <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Вход</h2>
                    <form onSubmit={handleSubmit}>
                        <EmailInput
                            onChange={handleChange}
                            value={values.email}
                            name={'email'}
                            isIcon={false}
                            extraClass="mb-6"
                        />
                        <PasswordInput
                            onChange={handleChange}
                            value={values.password}
                            name={'password'}
                            extraClass="mb-6"
                        />
                        <div className={styles.wrapperButton}>
                            <Button
                                htmlType="submit"
                                type="primary"
                                size="large"
                            >
                                Войти
                            </Button>
                        </div>
                    </form>
                    <div className={`${styles.wrapperText} mt-20 mb-4`}>
                        <span className='text text_type_main-small text_color_inactive mr-2' >Вы — новый пользователь?</span>
                        <Link to={'/register'} className={styles.link} >Зарегистрироваться</Link>
                    </div>
                    <div className={styles.wrapperText}>
                        <span className='text text_type_main-small text_color_inactive mr-2' >Забыли пароль?</span>
                        <Link to={'/forgot-password'} className={styles.link}>Восстановить пароль</Link>
                    </div>
        </main>
    )
}

export default LoginPage