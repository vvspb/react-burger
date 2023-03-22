import React from 'react';

import { useSelector } from '../../hooks/hooks';
import OrderCard from '../order-card/Order-card';
import styles from './Order-list.module.css'

const OrderList = () => {
  const { orderFeed } = useSelector(store => store.wsOrderFeed);

  return (
    <ul className={`${styles.wrappContaienrList}`}>
      {orderFeed?.orders.map(item => (
        <li key={item._id}>
            <OrderCard {...item} />
        </li>))}
    </ul>
  )
}

export default OrderList