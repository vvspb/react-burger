import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { FC } from 'react'
import styles from './Order-card.module.css'

import { IOrders, TIngredients } from '../../utils/types'
import { useSelector } from '../../hooks/hooks'
import FormattedDate from '../formatted-date/formatted-date'

const OrderCard: FC<IOrders> = (props: IOrders) => {
  const { ingredients } = useSelector(store => store.ingredients)
  const date = new Date(props.updatedAt)
  const funcSumOrderAndImgOrderIngerdients = (orderIngredients: string[], ingredients: TIngredients[]) => {
    let sumOrder = 0;
    const imgDataArray = [];
    for (let i = 0; i < orderIngredients.length; i++) {
      for (let y = 0; y < ingredients.length; y++) {
        if (orderIngredients[i] === ingredients[y]._id) {
          sumOrder = sumOrder + ingredients[y].price;
          imgDataArray.push({image: ingredients[y].image, name: ingredients[y].name})
        }
      }
    }
    return { sumOrder, imgDataArray }
  }

  const { sumOrder, imgDataArray } = funcSumOrderAndImgOrderIngerdients(props.ingredients, ingredients);

  const funcImgLine = (imgArray: Array<{image: string, name: string}>) => {
    return imgArray.map((item, index) => (
      <li key={index}>
        <div className={styles.imgWrapp}>
          <img className={styles.img} src={item.image} alt={item.name} width='112' height='56'/>
        </div>
      </li>
    ))
  }

  const imgLine = funcImgLine(imgDataArray)

  return (
    <article className={styles.container}>
      <div className={`${styles.description} mb-6`}>
        <p className='text text_type_digits-default'>#{props.number}</p>
        <p className='text text_type_main-small text_color_inactive'><FormattedDate date = {date}/></p>
      </div>
      <h3 className={`${styles.descriptionName} text text_type_main-medium mb-6`}>{props.name}</h3>
      <div className={`${styles.content}`}>
        <div className={`${styles.ingredients} mr-6`}><ul className={styles.imgLine}>{imgLine}</ul></div>
        <div className={styles.sumOrder}>
          <p className='text text_type_digits-default mr-2'>{sumOrder}</p> <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  )
}

export default OrderCard