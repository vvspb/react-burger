import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAuthUserData } from '../../services/actions/auth-action';
import styles from './register-page.module.css'


const RegisterPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({email:'', password:'', name:''})

    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        if(userData.name && userData.email && userData.password) {
            dispatch(fetchAuthUserData(userData.email, userData.password, userData.name))
            navigate('/', {replace: true})
        } 
    }, [dispatch, navigate, userData])

    return (
        <main className={styles.mainLoginPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Зарегестрироваться</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    value={userData.name}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mb-6"
                />
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
                        Зарегестрироваться
                    </Button>
                </div>
            </form>
            <div className={`${styles.wrapperText} mt-20`}>
                <span className='text text_type_main-small text_color_inactive mr-2' >Уже зарегистрированы?</span>
                <Link to={'/login'} className={styles.linkLogin}>Войти</Link>
            </div>
        </main>
    )
}

export default RegisterPage