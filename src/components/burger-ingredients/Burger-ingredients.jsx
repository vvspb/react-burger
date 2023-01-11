import React, { useState } from 'react';
import CardBurgerIngredient from '../card-burger-ingredient/Card-burger-ingredient';
import Modal from '../modal/Modal';
import IngredientsDetails from '../ingredients-details/Ingredients-details';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { objectPropType } from '../../utils/types'
import styles from './Burger-ingredients.module.css';

const BurgerIngredients = ({ data }) => {

    const [current, setCurrent] = useState('one');
    const [count, setCounter] = useState(0)
    const [modalOpenCloseIngredient, setModalOpenClose] = useState(false)
    const [ingredient, setIngredient] = useState({})

    const openModalWithIngredient = (item) => {
        setModalOpenClose(true)
        setIngredient({ ...item })
    }
    const closeModal = () => setModalOpenClose(false)


    return (
        <section aria-label='Ингредиенты для бургера' className={styles.menuBurgerIngredients}>
            <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    <p className='text text_type_main-default'>Булки</p>
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    <p className='text text_type_main-default'>Соусы</p>
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    <p className='text text_type_main-default'>Начинки</p>
                </Tab>
            </div>
            <div className={`${styles.container} custom-scroll`}>
                <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} id='bun'>
                    Булки
                </h2>
                <ul className={`${styles.cardsBurgerIngredients}`}>
                    {data.filter(item => item.type === 'bun').map(itemBun =>
                        < li className={styles.cardWrapper} key={itemBun._id} onClick={() => openModalWithIngredient(itemBun)}>
                            {!!count && <Counter count={count} size="default" extraClass="m-1" />}
                            <CardBurgerIngredient image={itemBun.image} price={itemBun.price} name={itemBun.name} />
                        </li>
                    )}
                </ul>
                <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} id='sauce'>
                    Соусы
                </h2>
                <ul className={`${styles.cardsBurgerIngredients}`}>
                    {data.filter(item => item.type === 'sauce').map(itemSauce =>
                        < li className={styles.cardWrapper} key={itemSauce._id} onClick={() => openModalWithIngredient(itemSauce)}>
                            {!!count && <Counter count={count} size="default" extraClass="m-1" />}
                            <CardBurgerIngredient image={itemSauce.image} price={itemSauce.price} name={itemSauce.name} />
                        </li>
                    )}
                </ul>
                <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} id='main'>Начинки</h2>
                <ul className={`${styles.cardsBurgerIngredients}`}>
                    {data.filter(item => item.type === 'main').map(itemMain =>
                        < li className={styles.cardWrapper} key={itemMain._id} onClick={() => openModalWithIngredient(itemMain)}>
                            {!!count && <Counter count={count} size="default" extraClass="m-1" />}
                            <CardBurgerIngredient image={itemMain.image} price={itemMain.price} name={itemMain.name} />
                        </li>
                    )}
                </ul>
            </div>
            {modalOpenCloseIngredient &&
                <Modal title='Детали ингредиента' onClose={closeModal} >
                    <IngredientsDetails infoIngredient={ingredient} />
                </Modal>
            }
        </section>
    );
}

export default BurgerIngredients

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(objectPropType)).isRequired
}