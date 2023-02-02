import React from 'react'

import styles from './Ingredients-details.module.css'
import { useSelector } from 'react-redux'


const InredientsDetails = () => {
    const { ingredientCurrent } = useSelector(state => state.ingredientCurrent)

    const description = 'text text_type_main-small text_color_inactive'

    return (
        <div className={`${styles.container} mb-15`} >
            <img src={ingredientCurrent.image_large} alt={ingredientCurrent.name} width='480' height='240' />
            <p className= {`text text_type_main-medium mt-4 mb-8 ${styles.text}`}>{ingredientCurrent.name}</p>
            <ul className={styles.macronutrients}>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Калории,ккал</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent.calories}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Белки, г</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent.proteins}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Жиры, г</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent.fat}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Углеводы, г</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}

export default InredientsDetails