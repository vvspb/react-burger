import React from 'react';
import OrderCard from '../order-card/Order-card';
import styles from './Order-list.module.css'


const orders =[
    {
      "ingredients": [
        "60d3463f7034a000269f45e7",
        "60d3463f7034a000269f45e9",
        "60d3463f7034a000269f45e8",
        "60d3463f7034a000269f45ea"
      ],
      "_id": "",
      "status": "done",
      "number": 0,
      "createdAt": "2021-06-03T14:43:22.587Z",
      "updatedAt": "2021-06-03T14:43:22.603Z"
    },
    {
        "ingredients": [
          "60d3463f7034a000269f45e7",
          "60d3463f7034a000269f45e9",
          "60d3463f7034a000269f45e8",
          "60d3463f7034a000269f45ea"
        ],
        "_id": "",
        "status": "done",
        "number": 0,
        "createdAt": "2021-05-23T14:43:22.587Z",
        "updatedAt": "2021-05-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3463f7034a000269f45e7",
          "60d3463f7034a000269f45e9",
          "60d3463f7034a000269f45e8",
          "60d3463f7034a000269f45ea"
        ],
        "_id": "",
        "status": "done",
        "number": 0,
        "createdAt": "2021-06-13T14:43:22.587Z",
        "updatedAt": "2021-06-13T14:43:22.603Z"
      }
  ]

const OrderList = () => {
  return (
    <ul className={`${styles.wrappContaienrList}`}>
        {orders.map(item => <li key={item.createdAt}><OrderCard {...item} /></li>)}
    </ul>
  )
}

export default OrderList