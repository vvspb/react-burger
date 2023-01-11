import React from 'react'
import PropTypes from 'prop-types'
import {objectPropType} from '../../utils/types'
import styles from './Ingredients-details.module.css'

const InredientsDetails = ({ infoIngredient }) => {

    const description = 'text text_type_main-small text_color_inactive'

    return (
        <div className={`${styles.container} mb-15`} >
            <img src={infoIngredient.image_large} alt={infoIngredient.name} width='480' height='240'/>
            <p className='text text_type_main-medium mt-4 mb-8'>{infoIngredient.name}</p>
            <ul className={styles.macronutrients}>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Калории,ккал</p>
                    <p className={`${description} ${styles.text}`}>{infoIngredient.calories}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Белки, г</p>
                    <p className={`${description} ${styles.text}`}>{infoIngredient.proteins}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Жиры, г</p>
                    <p className={`${description} ${styles.text}`}>{infoIngredient.fat}</p>
                </li>
                <li>
                    <p className={`${description} ${styles.text} mb-2`}>Углеводы, г</p>
                    <p className={`${description} ${styles.text}`}>{infoIngredient.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}

InredientsDetails.propTypes = {
    infoIngredient: PropTypes.shape(objectPropType)
}

export default InredientsDetails