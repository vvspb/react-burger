import React, { useRef, useState } from 'react';
import Modal from '../modal/Modal';
import IngredientsDetails from '../ingredients-details/Ingredients-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingredients.module.css';
import BurgerIngredientsList from '../burger-ingredients-list/Burger-ingredients-list';


const BurgerIngredients = () => {

    const [current, setCurrent] = useState('one');
    const [modalOpenCloseIngredient, setModalOpenClose] = useState(false)
    const [ingredient, setIngredient] = useState({})

    const refBun = useRef(null);
    const refSauce = useRef(null)
    const refMain = useRef(null)


    const handleClickTab = (e) => {
        if (refMain && e.currentTarget.id === 'tabMain') {
            refMain.current.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        if (refSauce && e.currentTarget.id === 'tabSauce') {
            refSauce.current.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        if (refBun && e.currentTarget.id === 'tabBun') {
            refBun.current.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }
    
    const openModalWithIngredient = (item) => {
        setModalOpenClose(true)
        setIngredient({ ...item })
    }
    const closeModal = () => setModalOpenClose(false)

    return (
        <section aria-label='Ингредиенты для бургера' className={styles.menuBurgerIngredients}>
            <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
            <div className={styles.tabs}>
                <div id = 'tabBun' onClick={(e)=>handleClickTab(e)} >
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        <p className='text text_type_main-default'>Булки</p>
                    </Tab>
                </div>
                <div id = 'tabSauce'  onClick={(e)=>handleClickTab(e)}>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        <p className='text text_type_main-default'>Соусы</p>
                    </Tab>
                </div>
                <div id = 'tabMain' onClick={(e)=>handleClickTab(e)}>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                        <p className='text text_type_main-default'>Начинки</p>
                    </Tab>
                </div>
            </div>
            <div className={`${styles.container} custom-scroll`}>
                <BurgerIngredientsList category='bun' onClick={openModalWithIngredient} title='Булки' ref={refBun} />
                <BurgerIngredientsList category='sauce' onClick={openModalWithIngredient} title='Соусы' ref={refSauce} />
                <BurgerIngredientsList category='main' onClick={openModalWithIngredient} title='Начинка' ref={refMain} />
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
