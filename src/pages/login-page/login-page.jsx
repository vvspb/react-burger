import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { fechSignInUser } from '../../services/actions/login-page-action';
import styles from './login-page.module.css'

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({email:'', password:''})

    const { loginAuthenticated } = useSelector(state => state.signInUser)
    const { registerAuthenticated } = useSelector(state => state.signUpUser)

    const isAuth = loginAuthenticated || registerAuthenticated

    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    
    const handleClick = useCallback((e) => {
        e.preventDefault()
        if(userData.email && userData.password) {
            dispatch(fechSignInUser(userData.email, userData.password))
            navigate('/', {replace: true})
        } 
    }, [dispatch, navigate, userData])

    if (isAuth) {
        return (
        <Navigate to={'/'} replace/>
        )
    }
    
    return (
        <main className={styles.mainLoginPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Вход</h2>
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