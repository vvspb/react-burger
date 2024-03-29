import FormattedDate from '../formatted-date/formatted-date';
import { useDispatch, useSelector } from '../../hooks/hooks'
import styles from './Order-card-details.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation, useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { funcSumOrderAndIngerdientsOrder } from '../../utils/funcSumOrderAndIngerdientsOrder';
import { addOrderCardDetails, addOrderPersonalCardDetails } from '../../services/actions/order-card-details-action';

type TOrderIngredientsDetais = Array<{
    name: string,
    image: string,
    type: string,
    _id: string,
    price: number,
    count?: number
}> | undefined

interface IOrderCardDetailsProps {
    flag?: boolean;
}

const OrderCardDetails: FC<IOrderCardDetailsProps> = ({ flag }: IOrderCardDetailsProps) => {

    const dispatch = useDispatch();

    const location = useLocation()

    const background: Location = location.state && location.state.background

    const { cardCurrent, dataOrder, cardCurrentPersonal, dataOrderPersonal } = useSelector(store => store.orderCardCurrent);
    const { orderFeed, orderFeedPersonal } = useSelector(store => store.wsOrderFeed);
    const { ingredients } = useSelector(store => store.ingredients)

    const { id } = useParams();

    const currentOrderCard = flag ? orderFeedPersonal?.orders?.find(item => item._id === id) :
        orderFeed?.orders?.find(item => item._id === id)

    const order = flag ? dataOrderPersonal : dataOrder;
    const card = flag ? cardCurrentPersonal : cardCurrent;

    const { sumOrder, ingredientsOrder } = funcSumOrderAndIngerdientsOrder(currentOrderCard?.ingredients!, ingredients)

    useEffect(() => {
        if (flag) {
            if (orderFeedPersonal?.orders?.length) {
                dispatch(addOrderPersonalCardDetails(currentOrderCard, { sumOrder, ingredientsOrder }))
            }
        } else {
            if (orderFeed?.orders?.length) {
                dispatch(addOrderCardDetails(currentOrderCard, { sumOrder, ingredientsOrder }))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentOrderCard])

    const funcMakeListIngredientsForPrice = (arr: TOrderIngredientsDetais): TOrderIngredientsDetais => {
        const resultArr: TOrderIngredientsDetais = [];
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                let count = 0;
                for (let t = 0; t < arr.length; t++) {
                    if (arr[i]._id === arr[t]._id) {
                        ++count
                    }

                    if (t === arr.length - 1) {
                        let repeatEl = 0;
                        for (const value of resultArr) {
                            if ((arr[i]._id === value._id)) ++repeatEl
                        }
                        if (repeatEl < 1) resultArr.push({ ...arr[i], count: count })
                    }
                }
            }
            return resultArr
        }
    }

    const ingredientsPrice = funcMakeListIngredientsForPrice(order?.ingredientsOrder)

    let date = new Date();

    if (card?.createdAt) { date = new Date(card?.createdAt) }

    const statusOrder = card?.status === 'done' ? 'Выполнен' :
        card?.status === 'created' ? 'Создан' : 'Готовится';

    return (
        <section className={styles.contentModal}>
            {!background && <p className={`text text_type_digits-default mt-5`}>#{card?.number}</p>}
            <h3 className={`${styles.descriptionName} text text_type_main-medium mb-3 pl-4`}>
                {card?.name}
            </h3>
            <p className={`${styles.description} text text_type_main-default mb-15 pl-4`}>
                <span className={statusOrder === 'Выполнен' ? styles.greenSpan : ''}>
                    {statusOrder}
                </span>
            </p>
            <h3 className={`${styles.description} text text_type_main-medium pl-4`}>Состав:</h3>
            <article className={styles.wrapList}>
                <ul className={`${styles.ul}`}>
                    {ingredientsPrice?.map(item => (
                        <li className={`${styles.itemList} mr-6`} key={item._id}>
                            <div className={styles.imgWrapp}>
                                <div className={styles.imgBack}>
                                    <img src={item.image} alt={item.name} width='112' height='56' />
                                </div>
                            </div>
                            <p className={`${styles.descriptionIngredName} text text_type_main-default`}>{item.name}</p>
                            <div className={styles.wrappPrice}>
                                <p className={`text text_type_digits-default`}>{item.count} x {item.price * item.count!}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
            <div className={`${styles.wrappSumOrderandDate} mb-10`}>
                <FormattedDate date={date} className='text text_type_main-default text_color_inactive' />
                <div className={styles.wrappPrice}>
                    <p className={`text text_type_digits-default`}>{order?.sumOrder}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </section>
    )
}

export default OrderCardDetails