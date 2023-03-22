import FormattedDate from '../formatted-date/formatted-date';
import { useSelector } from '../../hooks/hooks'
import styles from './Order-card-details.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderCardDetails = () => {

    const { cardCurrent, dataOrder } = useSelector(store => store.orderCardCurrent);

    let date = new Date();

    if (cardCurrent?.createdAt) { date = new Date(cardCurrent?.createdAt) }

    const statusOrder = cardCurrent?.status === 'done' ? 'Выполнен' :
        cardCurrent?.status === 'created' ? 'Создан' : 'Готовится';

    return (
        <section className={styles.contentModal}>
            <p className={`${styles.header} text text_type_digits-default`}>#{cardCurrent?.number}</p>
            <h3 className={`${styles.descriptionName} text text_type_main-medium mt-10 mb-3 pl-4`}>
                {cardCurrent?.name}
            </h3>
            <p className={`${styles.description} text text_type_main-default mb-15 pl-4`}>
                <span className={statusOrder === 'Выполнен' ? styles.greenSpan : ''}>
                    {statusOrder}
                </span>
            </p>
            <h3 className={`${styles.description} text text_type_main-medium pl-4`}>Состав:</h3>
            <article className={styles.wrapList}>
                <ul className={`${styles.ul}`}>
                    {dataOrder?.ingredientsOrder.map(item => (
                        <li className={`${styles.itemList} mr-6`} key={Math.random() * item.price * 100}>
                            <div className={styles.imgWrapp}>
                                <img src={item.image} alt={item.name} width='112' height='56' />
                            </div>
                            <p className={`${styles.descriptionIngredName} text text_type_main-default`}>{item.name}</p>
                            <div className={styles.wrappPrice}>
                                <p className={`text text_type_digits-default`}>{item.price}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
            <div className={`${styles.wrappSumOrderandDate} mb-10`}>
                <FormattedDate date={date} className='text text_type_main-default text_color_inactive' />
                <div className={styles.wrappPrice}>
                    <p className={`text text_type_digits-default`}>{dataOrder?.sumOrder}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </section>
    )
}

export default OrderCardDetails