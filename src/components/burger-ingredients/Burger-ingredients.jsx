import React, { useState } from 'react';
import Modal from '../modal/Modal';
import IngredientsDetails from '../ingredients-details/Ingredients-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingredients.module.css';
import BurgerIngredientsList from '../burger-ingredients-list/Burger-ingredients-list';


const BurgerIngredients = () => {

    const [current, setCurrent] = useState('one');
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
            <div className={styles.tabs}>
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
                <BurgerIngredientsList category='bun' onClick={openModalWithIngredient} title='Булки'/>
                <BurgerIngredientsList category='sauce' onClick={openModalWithIngredient} title='Соусы'/>
                <BurgerIngredientsList category='main' onClick={openModalWithIngredient} title='Начинка'/>
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
