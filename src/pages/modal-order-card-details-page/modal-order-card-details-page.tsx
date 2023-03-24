import { useDispatch, useSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/Modal'
import OrderCardDetails from '../../components/order-card-details/Order-card-details'

import { addOrderCardDetails } from '../../services/actions/order-card-details-action'

const ModalOrderCardDetailsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cardCurrent } = useSelector( store=> store.orderCardCurrent)

    const closeModal = () => {
        navigate('/feed')
        dispatch(addOrderCardDetails(undefined, undefined))
    }

    return (

        <Modal onClose={closeModal} title={`#${cardCurrent?.number}`}>
            <OrderCardDetails />
        </Modal>

    )
}

export default ModalOrderCardDetailsPage