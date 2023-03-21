
import React, { useEffect } from 'react'
import OrderList from '../../components/order-list/Order-list'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { connect } from '../../services/actions/ws-action'
import config from '../../utils/config'

import styles from './feed-page.module.css'



const FeedPage = () => {
    const dispatch = useDispatch();

    const { orderFeed } = useSelector(store => store.wsOrderFeed)

    const orderDone = orderFeed?.orders.filter(item => item.status === 'done').slice(0, 10)

    const orderDoing = orderFeed?.orders.filter(item => item.status === 'pending').slice(0, 5)

    useEffect(() => {
        dispatch(connect(`${config.wsUrl}/orders/all`))
    }, [dispatch])

    return (
        <main className={styles.wrapp}>
            <h2 className={`${styles.title} text text_type_main-large`}>Лента заказов</h2>
            <div className={styles.gridContainer}>
                <section aria-label='список заказов'>
                    <OrderList />
                </section>
                <section aria-label='статистика заказов' className={styles.statOrder}>
                    <div className={styles.ordersCurrent}>
                        <div>
                            <p className='text text_type_main-medium mb-6'>Готовы:</p>
                            <div className={styles.wrappOrder}>
                                {orderDone?.map(item => (<p
                                    className={`${styles.orderID} text text_type_digits-default`}
                                    key={item._id}>
                                    {item.number}
                                </p>)
                                )}
                            </div>
                        </div>
                        <div>
                            <p className='text text_type_main-medium mb-6'>В работе:</p>
                            <div className={styles.wrappOrder}>
                                {orderDoing?.map(item => (<p
                                    className='text text_type_digits-default'
                                    key={item._id}>
                                    {item.status}
                                </p>)
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text text_type_main-medium'>Выполнено за все время:</p>
                        <p className='text text_type_digits-large'>{orderFeed?.total}</p>
                    </div>
                    <div>
                        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                        <p className='text text_type_digits-large'>{orderFeed?.totalToday}</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default FeedPage