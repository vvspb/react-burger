import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './Order-card.module.css';

import { IOrders } from '../../utils/types';
import { useDispatch, useSelector } from '../../hooks/hooks';
import FormattedDate from '../formatted-date/formatted-date';
import { useLocation, useNavigate } from 'react-router-dom';
import { addOrderCardDetails, addOrderPersonalCardDetails } from '../../services/actions/order-card-details-action';
import { funcSumOrderAndIngerdientsOrder } from '../../utils/funcSumOrderAndIngerdientsOrder'

interface IPropsOrderCard extends IOrders {
  flag: boolean;
}

const OrderCard: FC<IPropsOrderCard> = (props: IPropsOrderCard) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { ingredients } = useSelector(store => store.ingredients);

  const date = new Date(props.updatedAt)

  const { sumOrder, ingredientsOrder } = funcSumOrderAndIngerdientsOrder(props.ingredients, ingredients);

  const funcImgLine = (imgArray: Array<{ image: string, name: string, type: string, _id: string }>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let bun;
    const imgLineArr = imgArray.filter(item => {
      if (item.type === 'bun') {
        bun = item
        return false
      }
      return true
    })

    if (bun) imgLineArr.unshift(bun)

    const imgIngredientsForCard = imgLineArr.slice(0, 6)
    const quantImg = imgIngredientsForCard.length

    return imgIngredientsForCard.map((item, index) => (
      <li
        key={index}
        className={styles.imgWrapp}
        style={{ zIndex: quantImg - index, right: index * 20 }}>
        <div className={styles.imgBack}>
          <img
            src={item.image}
            alt={item.name}
            width='112' height='56'
            className={imgLineArr.length - quantImg > 0 &&
              index === quantImg - 1 ? styles.lastImg : ''} />
          {
            imgLineArr.length - quantImg > 0 &&
            index === quantImg - 1 &&
            <span
              className={`${styles.quantityIngredients} text text_type_digits-default`}
              style={{ zIndex: quantImg + 1 }}>
              +{imgLineArr.length - quantImg}
            </span>
          }
        </div>
      </li>
    ))
  }

  const imgLine = funcImgLine(ingredientsOrder);


  const handleClick = () => {
    if (props.flag) {
      navigate(`/profile/orders/${props._id}`, { state: { background: location } })
      dispatch(addOrderPersonalCardDetails(props, { sumOrder, ingredientsOrder }))
    } else {
      dispatch(addOrderCardDetails(props, { sumOrder, ingredientsOrder }))
      navigate(`/feed/${props._id}`, { state: { background: location } })
    }
  }

  const statusOrder = props?.status === 'done' ? 'Выполнен' :
    props?.status === 'created' ? 'Создан' : 'Готовится';

  return (
    <article
      className={`${styles.container} ${props.flag ? styles.containerPersonalOrder : styles.containerFeedOrder}`}
      onClick={handleClick}>
      <div className={`${styles.description} mb-6`}>
        <p className='text text_type_digits-default'>#{props.number}</p>
        <p className='text text_type_main-small text_color_inactive'><FormattedDate date={date} /></p>
      </div>
      <h3 className={`${styles.descriptionName} text text_type_main-medium ${props.flag ? `mb-2` : `mb-6`}`}>{props.name}</h3>
      {props.flag &&
        <p className={`${statusOrder === 'Выполнен' ? styles.greenSpan : ''} mb-6`} >{statusOrder}</p>
      }
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