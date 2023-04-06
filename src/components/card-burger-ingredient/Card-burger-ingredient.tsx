import { Counter, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Card-burger-ingredient.module.css';

import { useDrag } from "react-dnd";
import { useSelector } from '../../hooks/hooks';
import { FC } from 'react';
import { TIngredients } from '../../utils/types';

interface IPropsCardBurgerIngredient {
    id: string;
    image: string;
    name: string;
    price: number;
}

const CardBurgerIngredient: FC<IPropsCardBurgerIngredient> = ({ id, image, name, price }: IPropsCardBurgerIngredient): JSX.Element => {

    const { choiceIngredients, choiceBun } = useSelector(state => state.burgerConstructor);

    const [{ isDrag }, dragRef] = useDrag({
        type: 'ingredients',
        item: { id },
        collect: monitor => ({
            isDrag: monitor.isDragging()

        })
    });

    const screenWidth = window.screen.width;

    const imgSize = screenWidth < 500 ? { width: '144', height: '72' } : { width: '240', height: '120' };

    const counter = (dragItemId: string, itemChoiceIngredients: Array<TIngredients>, itemChoiceBun: TIngredients | null): number => {
        const allIngredients = [...itemChoiceIngredients, itemChoiceBun]
        let count: number = 0
        if (itemChoiceBun?._id === dragItemId) {
            return count = allIngredients.filter(item => item?._id === dragItemId).length + 1
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            return count = allIngredients.filter(item => item?._id === dragItemId).length
        }
    }

    return (
        <>
            {!isDrag &&
                <>
                    {!!counter(id, choiceIngredients, choiceBun) &&
                        <Counter count={counter(id, choiceIngredients, choiceBun)} size="default" extraClass="m-1" />}
                    <article className={`${styles.card}`} ref={dragRef}>
                        <img alt={name} src={image} width={imgSize.width} height={imgSize.height}></img>
                        <div className={`${styles.cardPrice} mt-1 mb-1`}>
                            <p className={`${styles.description} text text_type_digits-default`}>{price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className={`${styles.descriptionName} text text_type_main-small`}>{name}</p>
                        {screenWidth < 500 && 
                        <Button htmlType="button" type="secondary" size="small">
                           Добавить
                        </Button>}
                    </article>
                </>}
        </>
    )
}

export default CardBurgerIngredient;