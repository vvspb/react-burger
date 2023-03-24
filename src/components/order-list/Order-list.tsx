import React, { FC } from 'react';

import { useSelector } from '../../hooks/hooks';
import OrderCard from '../order-card/Order-card';
import styles from './Order-list.module.css'

type TPropsOrderList = {
  flag: boolean;
}
const OrderList: FC<TPropsOrderList> = ({flag}: TPropsOrderList) => {

  const { orderFeed, orderFeedPersonal } = useSelector(store => store.wsOrderFeed);


  return (
    <ul className={`${styles.wrappContaienrList} ${flag? styles.wrappPersonalOrder: styles.wrappFeedOrder}`}>
      {
      (flag? orderFeedPersonal : orderFeed)?.orders?.map(item => (
        <li key={item._id}>
            <OrderCard {...item}  flag={flag}/>
        </li>))!
        }
    </ul>
  )
}

export default OrderList