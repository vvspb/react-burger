import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-constructor.module.css';
import Modal from '../modal/Modal';
import { useState, useContext, useEffect } from 'react';
import OrderDetails from '../order-details/Order-details';
import { useSelector, useDispatch } from 'react-redux'
import SumOrderContext from '../../contexts/sumOrderContext';
import { addBurgerConstructor } from '../../services/actions/burger-constructor-action';
import { fechOrderData } from '../../services/actions/order-details-action';
import { useDrop } from "react-dnd";
import BurgerConstructorElement from '../burger-constructor-element/Burger-constructor-element';


const BurgerConstructor = () => {
    const dispatch = useDispatch()
    const [modalOpenClose, setModalOpenClose] = useState(false)

    const { ingredients, isLoading } = useSelector(state => state.ingredients)
    const { choiceBun, choiceIngredients } = useSelector(state => state.burgerConstructor)
    const userName = useSelector(state => state.authUserData.userData.name);

    const { sumOrder, setSumOrder } = useContext(SumOrderContext)

    const openModal = () => setModalOpenClose(true)
    const closeModal = () => setModalOpenClose(false)

    const [, dropTarget] = useDrop({
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
            setSumOrder(choiceIngredients.reduce((acc, item) => acc + item.price, 0) + choiceBun.price * 2)
        }, [setSumOrder, choiceIngredients, choiceBun]
    )

    const ingredientsID = (arrMainSauce, objectBun) => {
        const mainSauceID = arrMainSauce.map(item => item._id)
        const bunID = objectBun._id
        return [...mainSauceID, bunID]
    }

    const handleClickOrder = () => {
        dispatch(fechOrderData(ingredientsID(choiceIngredients, choiceBun)))
    }

    return (
        <section className={`${styles.burgerConstructor} pt-25`} ref={dropTarget}>
            {!isLoading && <>
                <div className={`${styles.cardBurgerConstructor} ml-8`}>
                    {Object.keys(choiceBun).length ?
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
                    {Object.keys(choiceBun).length ?
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
                        onClick={() => {
                            openModal()
                            handleClickOrder()
                        }}
                        disabled={!(userName && Object.keys(choiceBun).length)}
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
