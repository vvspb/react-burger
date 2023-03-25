import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingredients.module.css';
import BurgerIngredientsList from '../burger-ingredients-list/Burger-ingredients-list';
import { addIngredientDetails } from '../../services/actions/ingredients-details-action';
import { useDispatch } from '../../hooks/hooks';
import { InView, useInView } from 'react-intersection-observer';
import { TIngredients } from '../../utils/types';
import { SyntheticEvent } from 'react';

const BurgerIngredients = () => {

    const dispatch = useDispatch()

    const handleClickTab = (e: SyntheticEvent) => {
        if (entryBun?.target && e.currentTarget.id === 'tabBun') {
            entryBun.target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        if (entySauce?.target && e.currentTarget.id === 'tabSauce') {
            entySauce.target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        if (entryMain?.target && e.currentTarget.id === 'tabMain') {
            entryMain.target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }

    const openModalWithIngredient = (item: TIngredients) => {
        dispatch(addIngredientDetails({ ...item }))
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
                <div id='tabBun' onClick={handleClickTab} >
                    <Tab value="buns" active={inViewBun} onClick={function (value: string): void {
                        throw new Error('Function not implemented.');
                    } } >
                        <p className='text text_type_main-default'>Булки</p>
                    </Tab>
                </div>
                <div id='tabSauce' onClick={handleClickTab}>
                    <Tab value="sauces" active={inViewSauce} onClick={function (value: string): void {
                        throw new Error('Function not implemented.');
                    } } >
                        <p className='text text_type_main-default'>Соусы</p>
                    </Tab>
                </div>
                <div id='tabMain' onClick={handleClickTab}>
                    <Tab value="main" active={inViewMain} onClick={function (value: string): void {
                        throw new Error('Function not implemented.');
                    } } >
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
        </section>
    );
}

export default BurgerIngredients
