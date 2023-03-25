import { useEffect } from 'react';
import NavPanel from '../../components/nav-panel/Nav-panel';
import OrderList from '../../components/order-list/Order-list';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { connectPersonalFeed } from '../../services/actions/ws-action';
import config from '../../utils/config';
import { getCookie } from '../../utils/cookie';

import styles from './history-order-page.module.css'

const HistoryOrdersPage = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(store => store.authUserData.userData);
  const accessToken = getCookie('accessToken');
  
  useEffect(() => {
    if (name) { dispatch(connectPersonalFeed(`${config.wsUrl}/orders?token=${accessToken}`)) }
  }, [dispatch, name, accessToken])

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