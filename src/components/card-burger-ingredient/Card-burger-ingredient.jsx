import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Card-burger-ingredient.module.css';
import PropTypes from 'prop-types'

const CardBurgerIngredient = (props) => {

    return (
        <article className={`${styles.card}`}>
            <img alt={props.name} src={props.image} width='240' height='120'></img>
            <div className={`${styles.cardPrice} mt-1 mb-1`}>
                <p className={`${styles.description} text text_type_digits-default`}>{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.descriptionName} text text_type_main-small`}>{props.name}</p>
        </article>
    )
}

CardBurgerIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default CardBurgerIngredient;