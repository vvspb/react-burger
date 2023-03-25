import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { FormEvent, useCallback } from 'react';
import { useDispatch } from '../../hooks/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { fetchAuthUserData } from '../../services/actions/auth-action';
import styles from './register-page.module.css'


const RegisterPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {values, handleChange} = useForm({email:'', password:'', name:''});
    
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(values.name && values.email && values.password) {
            dispatch(fetchAuthUserData(values.email, values.password, values.name))
            navigate('/', {replace: true})
        } 
    }, [dispatch, navigate, values])

    return (
        <main className={styles.mainLoginPage}>
            <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Зарегестрироваться</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={handleChange}
                    value={values.name}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mb-6"
                />
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