import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {objectPropType} from '../../utils/types'
import CardBurgerIngredient from '../card-burger-ingredient/Card-burger-ingredient'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './Burger-ingredients-list.module.css'


const BurgerIngredientsList = ({data, category, title, onClick}) => {
    const [count, setCounter] = useState(0)

    return (
        <>
            <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} id={category}>
                {title}
            </h2>
            <ul className={`${styles.cardsBurgerIngredients}`}>
                {data.filter(item => item.type === category).map(el =>
                    < li className={styles.cardWrapper} key={el._id} onClick={() => onClick(el)}>
                        {!!count && <Counter count={count} size="default" extraClass="m-1" />}
                        <CardBurgerIngredient image={el.image} price={el.price} name={el.name} />
                    </li>
                )}
            </ul>
        </>
    )
}

BurgerIngredientsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(objectPropType)).isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default BurgerIngredientsList