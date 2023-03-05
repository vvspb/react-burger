import React, { useEffect } from 'react'

import styles from './Ingredients-details.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addIngredientDetails } from '../../services/actions/ingredients-details-action'
import { IIngredientsDetailsReducer } from '../../services/reducers/ingredients-details-reducer'
import { IIngredientsReducer } from '../../services/reducers/burger-ingredients-list-reducer'

const InredientsDetails = () => {
    // затипизировать dispatch на 5 спринте
    const dispatch: any = useDispatch()

    const { ingredientCurrent } = useSelector((state: {ingredientCurrent: IIngredientsDetailsReducer}) => state.ingredientCurrent)
    const { id } = useParams()
    const ingredients = useSelector((state: {ingredients: IIngredientsReducer}) => state.ingredients.ingredients)

    useEffect(() => {
        if(ingredients.length) dispatch(addIngredientDetails(ingredients.find(item => item._id === id)!))
    }, [dispatch, id, ingredients])

    

    console.log(typeof ingredientCurrent)
    
    const description: string = 'text text_type_main-small text_color_inactive'

    return (
        <div className={`${styles.container} mb-15`} >
            <img src={ingredientCurrent.image_large} alt={ingredientCurrent.name} width='480' height='240' />
            <p className={`text text_type_main-medium mt-4 mb-8 ${styles.text}`}>{ingredientCurrent!.name}</p>
            <ul className={styles.macronutrients}>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Калории,ккал</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent!.calories}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Белки, г</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent!.proteins}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Жиры, г</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent!.fat}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Углеводы, г</p>
                    <p className={`${description} ${styles.text}`}>{ingredientCurrent!.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}

export default InredientsDetails