import React from 'react';
import { CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-ingredients.module.css';
import mockData from '../../utils/data.json'

const BurgerIngredients = () => {
    
    const [current, setCurrent] = React.useState('one');

    return (
        <section aria-label='Ингредиенты для бургера' className={styles.menuBurgerIngredients}>
            <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
            <div style={{ display: 'flex'}}>
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
                <section aria-label='Булки' className={`${styles.cardsBurgerIngredients} mt-10`}>
                    <h2 className={`${styles.subtitle} mb-6 text text_type_main-medium`} id='bun'>
                        Булки
                    </h2>
                    {mockData.filter(item => item.type === 'bun').map(itemBun =>
                        <article key={itemBun._id} className={`${styles.card} ml-4 mr-4 mt-6 mb-8`}>
                            <img alt={itemBun.name} src={itemBun.image} width='240' height='120'></img>
                            <div className={`${styles.cardPrice} mt-1 mb-1`}>
                                <p className={`${styles.description} text text_type_digits-default`}>{itemBun.price}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className={`${styles.descriptionName} text text_type_main-small`}>{itemBun.name}</p>
                        </article>
                    )}
                </section>
                <section aria-label='Соусы' className={`${styles.cardsBurgerIngredients} mt-2`}>
                    <h2 className={`${styles.subtitle} mb-6 text text_type_main-medium`} id='sauce'>
                        Соусы
                    </h2>
                    {mockData.filter(item => item.type === 'sauce').map(itemSauce =>
                        <article key={itemSauce._id} className={`${styles.card} ml-4 mr-4 mt-6 mb-8`}>
                            <img alt={itemSauce.name} src={itemSauce.image} width='240' height='120' />
                            <div className={`${styles.cardPrice} mt-1 mb-1`}>
                                <p className={`${styles.description} text text_type_digits-default`}>{itemSauce.price}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className={`${styles.descriptionName} text text_type_main-small`}>{itemSauce.name}</p>
                        </article>
                    )}
                </section>
                <section aria-label='Начинка' className={`${styles.cardsBurgerIngredients} mt-2`}>
                    <h2 className={`${styles.subtitle} mb-6 text text_type_main-medium`} id='main'>Начинки</h2>
                    {mockData.filter(item => item.type === 'main').map(itemMain =>
                        <article key={itemMain._id} className={`${styles.card} ml-4 mr-4 mb-8`}>
                            <img alt={itemMain.name} src={itemMain.image} width='240' height='120'/>
                            <div className={`${styles.cardPrice} mt-1 mb-1`}>
                                <p className={`${styles.description} text text_type_digits-default`}>{itemMain.price}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className={`${styles.descriptionName} text text_type_main-small`} >{itemMain.name}</p>
                        </article>
                    )}
                </section>
            </div>
        </section>
    );
}

export default BurgerIngredients