import React, { useEffect } from 'react'
import OrderCardDetails from '../../components/order-card-details/Order-card-details'
import { useDispatch, useSelector } from '../../hooks/hooks';
import { connectPersonalFeed } from '../../services/actions/ws-action';
import config from '../../utils/config';
import { getCookie } from '../../utils/cookie';

const OrderCardDetaisPersonalPage = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(store => store.authUserData.userData);
    const accessToken = getCookie('accessToken');

    useEffect(() => {
        if (name) { dispatch(connectPersonalFeed(`${config.wsUrl}/orders?token=${accessToken}`)) }
    }, [dispatch, name, accessToken])

    return (
        <>
            <OrderCardDetails flag={true} />
        </>
    )
}

export default OrderCardDetaisPersonalPage