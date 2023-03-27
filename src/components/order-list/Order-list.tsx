import React, { FC } from 'react';

import { useSelector } from '../../hooks/hooks';
import { IOrders } from '../../utils/types';
import OrderCard from '../order-card/Order-card';
import styles from './Order-list.module.css'

type TPropsOrderList = {
  flag: boolean;
}
const OrderList: FC<TPropsOrderList> = ({ flag }: TPropsOrderList) => {

  const { orderFeed, orderFeedPersonal } = useSelector(store => store.wsOrderFeed);

  const ordersPersonal = orderFeedPersonal?.orders
  const ordersPersonalReversed: IOrders[] = []

  if (ordersPersonal) {
    for (let i = ordersPersonal.length - 1; i >= 0; i--) {
      ordersPersonalReversed?.push(ordersPersonal[i])
    }
  }

  const orders = flag ? ordersPersonalReversed : orderFeed?.orders

  return (
    <ul className={`${styles.wrappContaienrList} ${flag ? styles.wrappPersonalOrder : styles.wrappFeedOrder}`}>
      {
        orders?.map(item => (
          <li key={item._id}>
            <OrderCard {...item} flag={flag} />
          </li>))!
      }
    </ul>
  )
}

export default OrderList