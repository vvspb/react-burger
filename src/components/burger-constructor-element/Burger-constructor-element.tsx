import  { FC, useRef } from "react";

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteBurgerConstructor, sortIngredients } from '../../services/actions/burger-constructor-action';
import { useDispatch } from '../../hooks/hooks';

import styles from './Burger-constructor-element.module.css';
import { useDrag, useDrop } from "react-dnd";
import { IChoiceIngredients } from "../../services/reducers/burger-constructor-reducer";

interface IBurgerConstructorElementProps {
    id: string;
    index: number;
    choiceIngredient: IChoiceIngredients;
}
const BurgerConstructorElement: FC<IBurgerConstructorElementProps> = ({ id, index, choiceIngredient }: IBurgerConstructorElementProps): JSX.Element => {

    const dispatch = useDispatch()

    const ref = useRef<HTMLDivElement>(null)

    const [{ isDragging }, drag] = useDrag({
        type: "SORT_INGREDIENT",
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [{ handlerId }, drop] = useDrop({
        accept: "SORT_INGREDIENT",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: any, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset!.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            dispatch(sortIngredients(dragIndex, hoverIndex))
            item.index = hoverIndex
        },
    });

    const handleClose = (itemId: string) => {
        dispatch(deleteBurgerConstructor(itemId))
    }

    drag(drop(ref))
    const opacity = isDragging ? 0 : 1

    return (
        <div
            className={`${styles.cardBurgerConstructor}`}
            style = {{opacity}}
            ref={ref}
            data-handler-id={handlerId}

        >
            <DragIcon type="primary" />
            <ConstructorElement
                text={choiceIngredient?.name}
                price={choiceIngredient?.price}
                thumbnail={choiceIngredient?.image}
                extraClass='ml-2'
                handleClose={() => handleClose(choiceIngredient.__id)}
            />
        </div>
    )

}

export default BurgerConstructorElement;