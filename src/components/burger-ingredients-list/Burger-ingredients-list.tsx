import React from 'react'
// import PropTypes from 'prop-types'
import CardBurgerIngredient from '../card-burger-ingredient/Card-burger-ingredient'

import styles from './Burger-ingredients-list.module.css'

import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

interface IPropsBurgerIngredientsList {
    category: string;
    title: string;
    onClick: Function;
}

export interface IIngredientsForCard {
    _id: string;
    image: string; 
    price: number; 
    name: string;
    type: string;
}

const BurgerIngredientsList = React.forwardRef<HTMLElement, IPropsBurgerIngredientsList>(({ category, title, onClick }, ref) => {

    const location = useLocation()
    //типизировать на 5 спринте
    const { ingredients } = useSelector((state: any )=> state.ingredients)

    return (
        <article ref={ref} >
            <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} >
                {title}
            </h2>
            <ul className={`${styles.cardsBurgerIngredients}`}>
                {
                    ingredients.filter((item: IIngredientsForCard) => item.type === category).map((el: IIngredientsForCard) =>
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

// BurgerIngredientsList.propTypes = {
//     category: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired
// }

export default BurgerIngredientsList