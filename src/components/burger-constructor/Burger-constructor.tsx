import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-constructor.module.css';
import Modal from '../modal/Modal';
import { useState, useEffect } from 'react';
import OrderDetails from '../order-details/Order-details';

import { addBurgerConstructor, deleteAllIngredientsBurgerConstructor } from '../../services/actions/burger-constructor-action';
import { fechOrderData } from '../../services/actions/order-details-action';
import { useDrop } from "react-dnd";
import BurgerConstructorElement from '../burger-constructor-element/Burger-constructor-element';
import { useLocation, useNavigate } from 'react-router-dom';
import { IChoiceIngredients } from '../../services/reducers/burger-constructor-reducer';

import { TIngredients } from '../../utils/types';
import { useSelector, useDispatch } from '../../hooks/hooks';

const BurgerConstructor = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [modalOpenClose, setModalOpenClose] = useState<boolean>(false)

    const { ingredients, isLoading } = useSelector(state => state.ingredients)
    const { choiceBun, choiceIngredients } = useSelector(state => state.burgerConstructor)
    const userName = useSelector(state => state.authUserData.userData.name);
    const addOrder = useSelector(state => state.orderData.orderNumber)

    const [sumOrder, setSumOrder] = useState<number>(0)

    const openModal = () => setModalOpenClose(true)
    const closeModal = () => setModalOpenClose(false)

    const [, dropTarget] = useDrop<{id: string}>({
        accept: "ingredients",
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(itemId) {
            dispatch(addBurgerConstructor(ingredients, itemId))
        },
    });

    useEffect(
        () => {
            if (choiceBun !== null) {
                setSumOrder(choiceIngredients.reduce((acc, item) => acc + item.price, 0) + choiceBun.price * 2)
            } else {
                setSumOrder(choiceIngredients.reduce((acc, item) => acc + item.price, 0))
            }
        }, [setSumOrder, choiceIngredients, choiceBun]
    )

    const ingredientsID = (arrMainSauce: Array<IChoiceIngredients>, objectBun: TIngredients | null): Array<string> => {
        const mainSauceID = arrMainSauce.map((item: { _id: string }) => item._id)
        if (objectBun !== null) {
            const bunID = objectBun._id
            return [...mainSauceID, bunID, bunID]
        }
        return [...mainSauceID]
    }

    const handleClickOrder = () => {
        if (userName) {
            dispatch(fechOrderData(ingredientsID(choiceIngredients, choiceBun)))
            openModal()
        } else {
            navigate('/login', { state: { from: location } })
        }
    }
    useEffect(() => {
        addOrder && dispatch(deleteAllIngredientsBurgerConstructor())
    }, [addOrder, dispatch])

    return (
        <section className={`${styles.burgerConstructor} pt-25`} ref={dropTarget} data-cy={'consrtuctor'}>
            {!isLoading && <>
                <div className={`${styles.cardBurgerConstructor} ml-8`}>
                    {choiceBun !== null ?
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${choiceBun?.name} (верх)`}
                            price={choiceBun?.price}
                            thumbnail={choiceBun?.image}
                            extraClass={`mb-2`}
                        />
                        :
                        <div className={`${styles.constructorElement} ${styles.elementTop}`}>
                            <p>Добавьте булку</p>
                        </div>
                    }
                </div>
                <div className={`${styles.scrollBox} custom-scroll`} >
                    {choiceIngredients.length ?
                        choiceIngredients.map((item, index) =>
                            <BurgerConstructorElement
                                choiceIngredient={item}
                                index={index}
                                id={item.__id}
                                key={item.__id} />)
                        :
                        <div className={styles.cardBurgerConstructor} >
                            <DragIcon type="primary" />
                            <div className={`${styles.constructorElement} ${styles.elementMiddle}`}>
                                <p>Добавьте ингредиент</p>
                            </div>
                        </div>
                    }
                </div>
                <div className={`${styles.cardBurgerConstructor} ml-8`}>
                    {choiceBun !== null ?
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${choiceBun?.name} (низ)`}
                            price={choiceBun?.price}
                            thumbnail={choiceBun?.image}
                            extraClass='mt-2'
                        />
                        :
                        <div className={`${styles.constructorElement} ${styles.elementButtom}`}>
                            <p> Добавьте булку</p>
                        </div>}
                </div>
                <div className={`${styles.orderBuy} mt-10`}>
                    <p className='text text_type_digits-medium mr-2'>{sumOrder ? sumOrder : 0}</p>
                    <CurrencyIcon type="primary" />
                    <Button
                        htmlType="button"
                        type="primary"
                        size="large"
                        extraClass='ml-10 mr-7'
                        children='Оформить заказ'
                        onClick={handleClickOrder}
                        disabled={!choiceBun}
                    />
                </div>
            </>}
            {modalOpenClose &&
                <Modal onClose={closeModal} >
                    <OrderDetails />
                </Modal>
            }
        </section>
    )
}

export default BurgerConstructor;
