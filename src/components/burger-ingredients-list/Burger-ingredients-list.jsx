import React from 'react'
import PropTypes from 'prop-types'
import CardBurgerIngredient from '../card-burger-ingredient/Card-burger-ingredient'

import styles from './Burger-ingredients-list.module.css'

import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'



const BurgerIngredientsList = React.forwardRef(({ category, title, onClick }, ref) => {

    const location = useLocation()
    const { ingredients } = useSelector(state => state.ingredients)

    return (
        <article ref={ref} >
            <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} >
                {title}
            </h2>
            <ul className={`${styles.cardsBurgerIngredients}`}>
                {
                    ingredients.filter(item => item.type === category).map(el =>
                        < li className={styles.cardWrapper} key={el._id} onClick={() => onClick(el)}>
                            <Link 
                            className={styles.link}
                            to={`ingredients/${el._id}`}
                            state={{background: location}}
                            >
                                <CardBurgerIngredient image={el.image} price={el.price} name={el.name} id={el._id} />
                            </Link>
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