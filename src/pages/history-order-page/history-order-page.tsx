import NavPanel from '../../components/nav-panel/Nav-panel';
import OrderList from '../../components/order-list/Order-list';

import styles from './history-order-page.module.css'

const HistoryOrdersPage = () => {

  return (
    <main className={styles.main}>
      <div className={styles.wrapperProfile}>
        <NavPanel />
        <section aria-label='список персональных заказов' className={styles.wrappOrderList}>
          <OrderList  flag={true}/>
        </section>
      </div>
    </main>
  )
}

export default HistoryOrdersPage;