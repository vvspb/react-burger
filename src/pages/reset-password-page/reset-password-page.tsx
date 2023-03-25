import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import api from '../../utils/api';
import styles from './reset-password-page.module.css'

const ResetPasswordPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { values, handleChange } = useForm({
        password: '',
        token: '',
        email: '',
        name: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.passwordReset(values.password, values.token!)
            .then(res => res.success && navigate('/login'))
    }

    return (
        <>
            {location?.state?.from?.pathname === '/forgot-password' ?
                (
                    <main className={styles.mainResetPassPage}>
                        <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</h2>
                        <form onSubmit={handleSubmit}>
                            <PasswordInput
                                onChange={handleChange}
                                value={values.password}
                                placeholder={'Введите новый пароль'}
                                name={'password'}
                                extraClass="mb-6"
                            />
                            <Input
                                type={'text'}
                                placeholder={'Введите код из письма'}
                                onChange={handleChange}
                                value={values.token!}
                                name={'token'}
                                error={false}
                                errorText={'Ошибка'}
                                size={'default'}
                                extraClass="mb-6"
                            />
                            <div className={styles.wrapperButton}>
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    size="large"

                                >
                                    Сохранить
                                </Button>
                            </div>
                        </form>
                        <div className={`${styles.wrapperText} mt-20`}>
                            <span className='text text_type_main-small text_color_inactive mr-2' >Вспомнили пароль?</span>
                            <Link to={'/login'} className={styles.linkLogin}>Войти</Link>
                        </div>
                    </main>
                )
                :
                (<Navigate to={'/forgot-password'} />)
            }

        </>
    )
}

export default ResetPasswordPage
