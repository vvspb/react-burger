import { useSelector } from 'react-redux'
import styles from './Order-details.module.css'


const OrderDetails = () => {
    const { orderNumber, isLoading, hasError } = useSelector(state => state.orderData)

    return (
        <div className={styles.contentModal}>

            {isLoading ?
                <p className='text text_type_main-medium mt-8 mb-15'>Идет загрузка...</p>
                :
                <>
                <h4 className={`${styles.orderNumber} text text_type_digits-large`}>{orderNumber}</h4>
                <p className='text text_type_main-medium mt-8 mb-15'>идентификатор заказа</p>
                <div className={styles.iconWrapper}></div>
                <p className='text text_type_main-default mt-15 mb-2'>Ваш заказ начали готовить</p>
                <p className='text text_type_main-default text_color_inactive mb-30'> Дождитель готовности на орбитальной станции</p>
            </>
            }
            { hasError && <p className='text text_type_main-medium mt-8 mb-15'>Что-то пошло не так. Заказ не принят.</p>}

        </div>
    )
}

export default OrderDetails