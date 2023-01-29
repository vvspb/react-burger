import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Card-burger-ingredient.module.css';
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";

const CardBurgerIngredient = ({id, image, name, price }) => {

    const [{isDrag}, dragRef] = useDrag({
        type: 'ingredients',
        item: {id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    return (
        !isDrag && 
        <article className={`${styles.card}`} ref={dragRef}>
            <img alt={name} src={image} width='240' height='120'></img>
            <div className={`${styles.cardPrice} mt-1 mb-1`}>
                <p className={`${styles.description} text text_type_digits-default`}>{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.descriptionName} text text_type_main-small`}>{name}</p>
        </article>
    )
}

CardBurgerIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default CardBurgerIngredient;