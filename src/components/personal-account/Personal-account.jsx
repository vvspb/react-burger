import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';

import styles from './Personal-account.module.css';

const PersonalAccount = () => {
    const [valueName, setValueName] = React.useState('value')
    const [valueLogin, setValueLogin] = React.useState('myLogin')
    const [valuePassword, setValuePassword] = React.useState('value')

    const inputRefName = React.useRef(null)

    const onIconClickName = () => {
        setTimeout(() => inputRefName.current.focus(), 0)
        alert('Icon Click Callback name')
    }

    const onChange = e => {
        setValueLogin(e.target.value)
        console.log(e.target.value)
    }

    const onChangePassword = e => {
        setValuePassword(e.target.value)
        console.log(e.target.value)
    }

    const textStyle = 'text text_type_main-medium';
    const inActive = 'text_color_inactive';

    return (
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
                        disabled={true}
                    />
                    <EmailInput
                        onChange={onChange}
                        value={valueLogin}
                        name={'email'}
                        placeholder="Логин"
                        isIcon={true}
                    />
                    <PasswordInput
                        onChange={onChangePassword}
                        value={valuePassword}
                        name={'password'}
                        icon="EditIcon"
                    />
                </div>
            </div>
        </main>
    )
}

export default PersonalAccount