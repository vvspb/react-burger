import React, { useEffect } from 'react'
import OrderCardDetails from '../../components/order-card-details/Order-card-details'
import { useDispatch } from '../../hooks/hooks';
import { connect , disconnect} from '../../services/actions/ws-action';
import config from '../../utils/config';

const OrderCardDetaisPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(connect(`${config.wsUrl}/orders/all`));
        return ()=>{
            dispatch(disconnect()); 
        } 
    }, [dispatch])

    return (
        <>
            <OrderCardDetails flag={false}/>
        </>
    )
}

export default OrderCardDetaisPage