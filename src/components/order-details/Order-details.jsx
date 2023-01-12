import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order-details.module.css'

const OrderDetails = (props) => {

    return (
        <div className={styles.contentModal}>
            <h4 className={`${styles.orderNumber} text text_type_digits-large`}>{props.orderNumber}</h4>
            <p className='text text_type_main-medium mt-8 mb-15'>идентификатор заказа</p>
            <div className={styles.iconWrapper}></div>
            <p className='text text_type_main-default mt-15 mb-2'>Ваш заказ начали готовить</p>
            <p className='text text_type_main-default text_color_inactive mb-30'> Дождитель готовности на орбитальной станции</p>
        </div>
    )
}

OrderDetails.propTypes ={
    orderNumber: PropTypes.string.isRequired
  }

export default OrderDetails