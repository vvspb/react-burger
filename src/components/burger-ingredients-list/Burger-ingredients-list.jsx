import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CardBurgerIngredient from '../card-burger-ingredient/Card-burger-ingredient'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './Burger-ingredients-list.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { fechIngredients } from '../../services/actions/burger-ingredients-list-action';



const BurgerIngredientsList = React.forwardRef(({ category, title, onClick }, ref) => {
    const [count, setCounter] = useState(0)
  

    const { ingredients } = useSelector(state => state.ingredients)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fechIngredients())
    }, [dispatch])

    return (
        <article ref={ref} >
            <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} >
                {title} 
            </h2>
            <ul className={`${styles.cardsBurgerIngredients}`}>
                {
                    ingredients.filter(item => item.type === category).map(el =>
                        < li className={styles.cardWrapper} key={el._id} onClick={() => onClick(el)}>
                            {!!count && <Counter count={count} size="default" extraClass="m-1" />}
                            <CardBurgerIngredient image={el.image} price={el.price} name={el.name} id={el._id}/>
                        </li>
                    )
                }
            </ul>
        </article>
    )
})

BurgerIngredientsList.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default BurgerIngredientsList