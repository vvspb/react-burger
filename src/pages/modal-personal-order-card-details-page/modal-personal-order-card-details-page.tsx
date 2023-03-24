import { useDispatch, useSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/Modal'

import { addOrderCardDetails } from '../../services/actions/order-card-details-action'
import OrderCardPersonalDetails from '../../components/order-card-personal-details/Order-card-personal-details';

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
            <OrderCardPersonalDetails />
        </Modal>
  )
}

export default ModalPersonalOrderCardDetailsPage