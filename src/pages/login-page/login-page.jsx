import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link} from 'react-router-dom';
import { fetchAuthUserData } from '../../services/actions/auth-action';
import styles from './login-page.module.css'

const LoginPage = () => {

    const dispatch = useDispatch()


    const [userData, setUserData] = useState({ email: '', password: '' })

    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        if (userData.email && userData.password) {
            dispatch(fetchAuthUserData(userData.email, userData.password))
        }
    }, [dispatch, userData.email, userData.password])

    return (
        <main className={styles.mainLoginPage}>
                    <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Вход</h2>
                    <form onSubmit={handleSubmit}>
                        <EmailInput
                            onChange={onChange}
                            value={userData.email}
                            name={'email'}
                            isIcon={false}
                            extraClass="mb-6"
                        />
                        <PasswordInput
                            onChange={onChange}
                            value={userData.password}
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