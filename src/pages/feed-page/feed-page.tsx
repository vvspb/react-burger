import React from 'react'
import OrderList from '../../components/order-list/Order-list'
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
                        <p className='text text_type_digits-large'>28 752</p>
                    </div>
                    <div>
                        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                        <p className='text text_type_digits-large'>138</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default FeedPage