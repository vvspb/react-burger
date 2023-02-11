import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

import AppHeader from '../../components/app-header/App-header';

import styles from './profile-page.module.css';

const ProfilePage = () => {

    const [valueName, setValueName] = React.useState('value')
    const [valueLogin, setValueLogin] = React.useState('value')
    const [valuePassword, setValuePassword] = React.useState('value')
    const [isEditLogin, setIsEditLogin] = React.useState(true)

    const inputRefName = React.useRef(null)
    const inputRefLogin = React.useRef(null)
    const inputRefPassword = React.useRef(null)

    const onIconClickName = () => {
        setTimeout(() => inputRefName.current.focus(), 0)
        alert('Icon Click Callback name')
    }

    const onIconClickLogin = () => {
        setTimeout(() => inputRefLogin.current.focus(), 0)
        alert('Icon Click Callback login')
        setIsEditLogin(false)
    }

    const onIconClickPass = () => {
        setTimeout(() => inputRefPassword.current.focus(), 0)
        alert('Icon Click Callback pass')
    }

    const textStyle = 'text text_type_main-medium';
    const inActive = 'text_color_inactive';

    return (
        <>
            <AppHeader />
            <main className={styles.main}>
                <div className={styles.wrapperProfile}>
                    <nav className={styles.navProfile}>
                        <ul className={styles.linkProfile}>
                            <li className={`${styles.navLi} ${textStyle}`}>Профиль</li>
                            <li className={`${styles.navLi} ${textStyle} ${inActive}`}>История заказов</li>
                            <li className={`${styles.navLi} ${textStyle} ${inActive}`}>Выход</li>
                        </ul>
                        <p className="text text_type_main-default text_color_inactive mt-20">
                            В этом разделе вы можете <br />
                            изменить свои персональные данные
                        </p>
                    </nav>
                    <div className={styles.inputFrofile}>
                        <Input
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={e => setValueName(e.target.value)}
                            icon={'EditIcon'}
                            value={valueName}
                            name={'name'}
                            error={false}
                            ref={inputRefName}
                            onIconClick={onIconClickName}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                            disabled={true}
                        />
                        <Input
                            type={'text'}
                            placeholder={'Логин'}
                            onChange={e => setValueLogin(e.target.value)}
                            icon={'EditIcon'}
                            value={valueLogin}
                            name={'login'}
                            error={false}
                            ref={inputRefLogin}
                            onIconClick={onIconClickLogin}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                            disabled={isEditLogin}
                        />
                        <Input
                            type={'password'}
                            placeholder={'placeholder'}
                            onChange={e => setValuePassword(e.target.value)}
                            icon={'EditIcon'}
                            value={valuePassword}
                            name={'pass'}
                            error={false}
                            ref={inputRefPassword}
                            onIconClick={onIconClickPass}
                            errorText={'Ошибка'}
                            size={'default'}
                            extraClass="ml-1"
                            disabled={true}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProfilePage