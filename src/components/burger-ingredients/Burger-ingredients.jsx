import React from 'react';
import CardBurgerIngredient from '../card-burger-ingredient/Card-burger-ingredient';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingredients.module.css';
import mockData from '../../utils/data.json';

const BurgerIngredients = () => {

    const [current, setCurrent] = React.useState('one');

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
                    {mockData.filter(item => item.type === 'bun').map(itemBun =>
                        < li className={styles.cardWrapper} key={itemBun._id}>
                            <CardBurgerIngredient image={itemBun.image} price={itemBun.price} name={itemBun.name} />
                        </li>
                    )}
                </ul>
                <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} id='sauce'>
                    Соусы
                </h2>
                <ul className={`${styles.cardsBurgerIngredients}`}>
                    {mockData.filter(item => item.type === 'sauce').map(itemSauce =>
                        < li className={styles.cardWrapper} key={itemSauce._id}>
                            <CardBurgerIngredient image={itemSauce.image} price={itemSauce.price} name={itemSauce.name} />
                        </li>
                    )}
                </ul>
                <h2 className={`${styles.subtitle} mb-6 mt-10 text text_type_main-medium`} id='main'>Начинки</h2>
                <ul className={`${styles.cardsBurgerIngredients}`}>
                    {mockData.filter(item => item.type === 'main').map(itemMain =>
                        < li className={styles.cardWrapper} key={itemMain._id}>
                            <CardBurgerIngredient image={itemMain.image} price={itemMain.price} name={itemMain.name} />
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default BurgerIngredients