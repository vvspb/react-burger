
import PropTypes from 'prop-types';
import { objectPropType } from '../../utils/types'
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Burger-constructor.module.css';



const BurgerConstructor = ({ choiceBun, choiceIngredients }) => {

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
            <div className={`${styles.scrollBox} custom-scroll`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                <p className='text text_type_digits-medium mr-2'>12690</p>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="large" extraClass='ml-10 mr-7'>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
    choiceIngredients: PropTypes.arrayOf(PropTypes.shape(objectPropType)).isRequired,
    choiceBun: PropTypes.shape(objectPropType).isRequired,
}