import { useDispatch } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/Modal'
import OrderCardDetails from '../../components/order-card-details/Order-card-details'

import { addOrderCardDetails } from '../../services/actions/order-card-details-action'

const ModalOrderCardDetailsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeModal = () => {
        navigate('/feed')
        dispatch(addOrderCardDetails(undefined, undefined))
    }

    return (

        <Modal onClose={closeModal} >
            <OrderCardDetails />
        </Modal>

    )
}

export default ModalOrderCardDetailsPage