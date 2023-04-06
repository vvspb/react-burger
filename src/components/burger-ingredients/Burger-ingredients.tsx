import Tab from '../tab/Tab';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Burger-ingredients.module.css';
import BurgerIngredientsList from '../burger-ingredients-list/Burger-ingredients-list';
import { addIngredientDetails } from '../../services/actions/ingredients-details-action';
import { useDispatch } from '../../hooks/hooks';
import { InView, useInView } from 'react-intersection-observer';
import { TIngredients } from '../../utils/types';
import { SyntheticEvent } from 'react';

const BurgerIngredients = () => {

    const dispatch = useDispatch();

    const screenWidth = window.screen.width;

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

    const [refBun, inViewBun, entryBun] = useInView({
        threshold: 0.4,
    })
    const [refSauce, inViewSauce, entySauce] = useInView({
        threshold: [0.6, 1],
    })
    const [refMain, inViewMain, entryMain] = useInView({
        threshold: [0.15, 1]
    })

    return (
        <section aria-label='Ингредиенты для бургера' className={styles.menuBurgerIngredients} >
            <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
            <div className={styles.mainContainer}>
                <div className={styles.tabs}>
                    <div id='tabBun' onClick={handleClickTab} style={{ width: '106' }}>
                        <Tab value="buns" active={inViewBun}>
                            <p className='text text_type_main-default'>Булки</p>
                        </Tab>
                    </div>
                    <div id='tabSauce' onClick={handleClickTab} style={{ width: '106' }}>
                        <Tab value="sauces" active={inViewSauce}>
                            <p className='text text_type_main-default'>Соусы</p>
                        </Tab>
                    </div>
                    <div id='tabMain' onClick={handleClickTab} style={{ width: '106' }}>
                        <Tab value="main" active={inViewMain}>
                            <p className='text text_type_main-default'>Начинки</p>
                        </Tab>
                    </div>
                </div>
                <InView>
                    <div className={styles.wrapperContainer}>
                        <div className={`${styles.container} custom-scroll`}>
                            <BurgerIngredientsList category='bun' onClick={openModalWithIngredient} title='Булки' ref={refBun} />
                            <BurgerIngredientsList category='sauce' onClick={openModalWithIngredient} title='Соусы' ref={refSauce} />
                            <BurgerIngredientsList category='main' onClick={openModalWithIngredient} title='Начинка' ref={refMain} />
                        </div>
                    </div>
                </InView>
            </div>
            {screenWidth < 500 &&
                <footer className={styles.footer}>
                    <div className={styles.sumOrderContainer}>
                        <p className={`${styles.sumOrder} text text_type_digits-default`}>420</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="small" extraClass="pl-10 pr-10">
                        Смотреть заказ
                    </Button>
                </footer>
            }
        </section>
    );
}

export default BurgerIngredients
