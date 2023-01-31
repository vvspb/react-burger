import React, { useState } from 'react';
import Modal from '../modal/Modal';
import IngredientsDetails from '../ingredients-details/Ingredients-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingredients.module.css';
import BurgerIngredientsList from '../burger-ingredients-list/Burger-ingredients-list';
import { addIngredientDetails } from '../../services/actions/ingredients-details-action';
import { useDispatch } from 'react-redux';
import { InView, useInView } from 'react-intersection-observer';

const BurgerIngredients = () => {

    const [modalOpenCloseIngredient, setModalOpenClose] = useState(false)

    const dispatch = useDispatch()

    const handleClickTab = (e) => {
        if (entryBun.target && e.currentTarget.id === 'tabBun') {
            entryBun.target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        if (entySauce.target && e.currentTarget.id === 'tabSauce') {
            entySauce.target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        if (entryMain.target && e.currentTarget.id === 'tabMain') {
            entryMain.target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }

    const openModalWithIngredient = (item) => {
        setModalOpenClose(true)
        dispatch(addIngredientDetails({ ...item }))
    }

    const closeModal = () => {
        setModalOpenClose(false)
        dispatch(addIngredientDetails({}))
    }
    
    const [refBun, inViewBun, entryBun ]  = useInView({
        threshold: 0.4,
    })
    const [refSauce, inViewSauce, entySauce ] = useInView({
        threshold: [0.6 , 1],
    })
    const [refMain, inViewMain, entryMain ] = useInView({
        threshold: [0.15 , 1]
    })
 
    return (
        <section aria-label='Ингредиенты для бургера' className={styles.menuBurgerIngredients} >
            <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
            <div className={styles.tabs}>
                <div id='tabBun' onClick={(e) => handleClickTab(e)} >
                    <Tab value="buns" active={inViewBun} >
                        <p className='text text_type_main-default'>Булки</p>
                    </Tab>
                </div>
                <div id='tabSauce' onClick={(e) => handleClickTab(e)}>
                    <Tab value="sauces" active={inViewSauce} >
                        <p className='text text_type_main-default'>Соусы</p>
                    </Tab>
                </div>
                <div id='tabMain' onClick={(e) => handleClickTab(e)}>
                    <Tab value="main" active={inViewMain} >
                        <p className='text text_type_main-default'>Начинки</p>
                    </Tab>
                </div>
            </div>
            <InView>
            <div className={`${styles.container} custom-scroll`}>
                <BurgerIngredientsList category='bun' onClick={openModalWithIngredient} title='Булки' ref={refBun} />
                <BurgerIngredientsList category='sauce' onClick={openModalWithIngredient} title='Соусы' ref={refSauce} />
                <BurgerIngredientsList category='main' onClick={openModalWithIngredient} title='Начинка' ref={refMain}/>
            </div>
            </InView>
            {modalOpenCloseIngredient &&
                <Modal title='Детали ингредиента' onClose={closeModal} >
                    <IngredientsDetails />
                </Modal>
            }
        </section>
    );
}

export default BurgerIngredients
