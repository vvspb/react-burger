import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAuthUserData } from '../../services/actions/auth-action';
import styles from './login-page.module.css'

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ email: '', password: '' })
    const userName = useSelector(state => state.authUserData.userData.name)
    const hasError = useSelector(state => state.authUserData.hasError)

    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleClick = useCallback((e) => {
        e.preventDefault()
        if (userData.email && userData.password) {
            dispatch(fetchAuthUserData(userData.email, userData.password))
            userName && navigate('/', { replace: true })
        }
    }, [dispatch, navigate, userData.email, userData.password, userName])

    const handleClickYet = () => {
        navigate('/login')
    }

    return (
        <main className={styles.mainLoginPage}>
            {hasError ? (
                <>
                    <p className='text text_type_main-medium mb-6'>Пользователь не найден. Проверьте данные перед вводом</p>
                    <Button
                        htmlType="button"
                        type="primary"
                        size="large"
                        onClick={handleClickYet}
                    >
                        Попробовать еще раз
                    </Button>
                </>
            ) :
                (<>
                    <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Вход</h2>
                    <form>
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
                                onClick={handleClick}
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
                </>)
            }

        </main>
    )
}

export default LoginPage