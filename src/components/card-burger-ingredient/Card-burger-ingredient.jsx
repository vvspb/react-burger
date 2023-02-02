import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Card-burger-ingredient.module.css';
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';

const CardBurgerIngredient = ({ id, image, name, price }) => {
    const { choiceIngredients, choiceBun } = useSelector(state => state.burgerConstructor);

    const [{ isDrag }, dragRef] = useDrag({
        type: 'ingredients',
        item: { id },
        collect: monitor => ({
            isDrag: monitor.isDragging()

        })
    });

    const counter = (dragItemId, itemChoiceIngredients, itemChoiceBun) => {
        let allIngredients = [...itemChoiceIngredients, itemChoiceBun]
        let count = []
        if (itemChoiceBun._id === dragItemId) {
            return count = allIngredients.filter(item => item._id === dragItemId).length + 1
        } else {
            // eslint-disable-next-line no-unused-vars
            return count = allIngredients.filter(item => item._id === dragItemId).length
        }
    }

    return (
        !isDrag &&
        <>
            {!!counter(id, choiceIngredients, choiceBun) &&
                <Counter count={counter(id, choiceIngredients, choiceBun)} size="default" extraClass="m-1" />}
            <article className={`${styles.card}`} ref={dragRef}>
                <img alt={name} src={image} width='240' height='120'></img>
                <div className={`${styles.cardPrice} mt-1 mb-1`}>
                    <p className={`${styles.description} text text_type_digits-default`}>{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`${styles.descriptionName} text text_type_main-small`}>{name}</p>
            </article>
        </>
    )
}

CardBurgerIngredient.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default CardBurgerIngredient;