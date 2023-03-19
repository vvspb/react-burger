import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { FC } from 'react'
import styles from './Order-card.module.css'

type TOrder = {
  ingredients: string[];
  _id:         string;
  status:      string;
  number:      number;
  createdAt:   string;
  updatedAt:   string;
};

const OrderCard: FC<TOrder> = (props: TOrder) => {
  return (
    <article className={styles.container}>
      <div className={`${styles.description} mb-6`}>
        <p className='text text_type_digits-default'>#{props.number}</p>
        <p className='text text_type_main-small text_color_inactive'>{props.createdAt}</p>
      </div>
      <h3 className='text text_type_main-medium mb-6'>Death Star Starship Main бургер</h3>
      <div className={`${styles.content}`}>
        <div className={`${styles.ingredients} mr-6`}>ingredients</div><div className={styles.sumOrder}><p className='text text_type_digits-default mr-2'>100</p> <CurrencyIcon type="primary" /></div>
      </div>
    </article>
  )
}

export default OrderCard