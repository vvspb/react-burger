import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/Modal'
import IngredientsDetails from '../../components/ingredients-details/Ingredients-details'

import { addIngredientDetails } from '../../services/actions/ingredients-details-action'

const ModalDetailesIngredientPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const closeModal = () => {
        navigate('/')
        dispatch(addIngredientDetails({}))
    }
  return (

        <Modal title='Детали ингредиента' onClose={closeModal} >
                    <IngredientsDetails />
        </Modal>

  )
}

export default ModalDetailesIngredientPage