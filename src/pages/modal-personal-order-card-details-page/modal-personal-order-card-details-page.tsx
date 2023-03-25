import { useDispatch, useSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/Modal'

import { addOrderCardDetails } from '../../services/actions/order-card-details-action'
import OrderCardDetails from '../../components/order-card-details/Order-card-details';

const ModalPersonalOrderCardDetailsPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cardCurrentPersonal } = useSelector( store=> store.orderCardCurrent)

    const closeModal = () => {
        navigate('/profile/orders')
        dispatch(addOrderCardDetails(undefined, undefined))
    }

  return (
    <Modal onClose={closeModal} title={`#${cardCurrentPersonal?.number}`}>
            <OrderCardDetails flag={true} />
        </Modal>
  )
}

export default ModalPersonalOrderCardDetailsPage