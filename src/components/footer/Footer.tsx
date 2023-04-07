import {FC} from 'react'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Footer.module.css'

interface IFooterProps {
    btnDescription: string;
}
const Footer:FC<IFooterProps> = ({ btnDescription }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.sumOrderContainer}>
                <p className={`${styles.sumOrder} text text_type_digits-default`}>420</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button
                htmlType="button"
                type="primary"
                size="small"
                extraClass="pl-10 pr-10"
                children={btnDescription} />
        </footer>
    )
}

export default Footer