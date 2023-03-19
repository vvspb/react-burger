
import React, { useEffect } from 'react'
import OrderList from '../../components/order-list/Order-list'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { connect } from '../../services/actions/ws-action'
import config from '../../utils/config'
// import OrdersFeed from '../../components/orders-feed/Orders-feed'
import styles from './feed-page.module.css'

const orderDone = [
    '034533',
    '034532',
    '034530',
    '034527',
    '034525'
]

const orderDoing = [
    '034530',
    '034539',
    '034531',
    '034590',
    '034510'
]

const FeedPage = () => {
    const dispatch = useDispatch();

    const {orderFeed} = useSelector(store => store.wsOrderFeed)

    useEffect(()=>{
        dispatch(connect(`${config.wsUrl}/orders/all`))
    },[dispatch])

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
                            {orderDone.map(item => (<p
                                className={`${styles.orderID} text text_type_digits-default`}
                                key={item}>
                                {item}
                            </p>)
                            )}
                        </div>
                        <div>
                            <p className='text text_type_main-medium mb-6'>В работе:</p>
                            {orderDoing.map(item => (<p
                                className='text text_type_digits-default'
                                key={item}>
                                {item}
                            </p>)
                            )}
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