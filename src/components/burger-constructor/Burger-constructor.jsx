import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-constructor.module.css';
import Modal from '../modal/Modal';
import { useState, useContext, useEffect } from 'react';
import OrderDetails from '../order-details/Order-details';
import BurgerConstructorContext from '../../contexts/burgerConstructorContext';
import BurgerIngredientsContext from '../../contexts/burgerIngredientsContext';
import SumOrderContext from '../../contexts/sumOrderContext';



const BurgerConstructor = () => {
    const [modalOpenClose, setModalOpenClose] = useState(false)

    const { dataIngredients } = useContext(BurgerIngredientsContext)
    const { choiceBun, choiceIngredients, setChoiceBun, setChoiceIngredients } = useContext(BurgerConstructorContext)
    const { sumOrder, setSumOrder } = useContext(SumOrderContext)

    const openModal = () => setModalOpenClose(true)
    const closeModal = () => setModalOpenClose(false)

    useEffect(
        () => {
            setChoiceBun(dataIngredients.find(item => item._id === '60d3b41abdacab0026a733c7'))
        },
        [dataIngredients, setChoiceBun]
    );

    useEffect(
        () => {
            setChoiceIngredients(dataIngredients.filter(item => item.type !== 'bun'))
        }, [dataIngredients, setChoiceIngredients]
    )

    useEffect(
        () => {
            setSumOrder(choiceIngredients.reduce((acc, item) => acc + item.price, 0) + choiceBun.price * 2)
        }, [setSumOrder, choiceIngredients, choiceBun]
    )

    return (
        <section className={`${styles.burgerConstructor} pt-25`}>
            <div className={`${styles.cardBurgerConstructor} ml-8`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${choiceBun.name} (верх)`}
                    price={choiceBun.price}
                    thumbnail={choiceBun.image}
                    extraClass='mb-2'
                />
            </div>
            <div className={`${styles.scrollBox} custom-scroll`}>
                {choiceIngredients.map(item =>
                    <div className={`${styles.cardBurgerConstructor}`} key={item._id} >
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                            extraClass='ml-2'
                        />
                    </div>)}
            </div>
            <div className={`${styles.cardBurgerConstructor} ml-8`}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${choiceBun.name} (низ)`}
                    price={choiceBun.price}
                    thumbnail={choiceBun.image}
                    extraClass='mt-2'
                />
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
                    onClick={openModal}
                />
            </div>
            {modalOpenClose && 
                <Modal onClose={closeModal} >
                    <OrderDetails/>
                </Modal>
            }
        </section>
    )
}

export default BurgerConstructor;
