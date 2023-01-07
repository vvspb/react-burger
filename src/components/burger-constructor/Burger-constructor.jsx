
import React, { useState } from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import mockData from '../../utils/data.json'
import styles from './Burger-constructor.module.css';

// моковые данные
const bunArr = mockData.slice(item => item.type === 'bun');
const ingredientsArr = mockData.filter(item => item.type !== 'bun');

const BurgerConstructor = () => {

    const [choiceBun, setChoiceBun] = useState(bunArr[0]);
    const [choiceIngredients, setChoiceIngredients] = useState(ingredientsArr)

    return (
        <section className={`${styles.burgerConstructor} pt-25 ml-10`}>
            <div style={{ display: 'flex', flexDirection: 'column'}} className='ml-4 mr-4'>
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
                <div className={`${styles.scrollBox} custom-scroll`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {choiceIngredients.map(item =>
                        <div className={`${styles.cardBurgerConstructor}`} key={item._id} >
                            <DragIcon type="primary"/>
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
            </div>
            <div className={`${styles.orderBuy} mt-10 mr-4`}>
            <p className='text text_type_digits-medium mr-2'>12690</p>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="large" extraClass='ml-10'>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor;