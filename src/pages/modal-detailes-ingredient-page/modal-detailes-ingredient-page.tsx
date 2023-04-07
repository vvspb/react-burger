import React from 'react'
import { useDispatch } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal/Modal'
import IngredientsDetails from '../../components/ingredients-details/Ingredients-details'

import { addIngredientDetails } from '../../services/actions/ingredients-details-action'

const ModalDetailesIngredientPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeModal = () => {
    navigate('/')
    dispatch(addIngredientDetails({
      _id: '',
      name: '',
      type: '',
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: '',
      image_mobile: '',
      image_large: '',
      __v: 0
    }))
  }

  const screenWidth = window.screen.width;
  const textHeader =  screenWidth <= 500 ? '' : 'Детали ингредиента'
  return (

    <Modal title={textHeader} onClose={closeModal} >
      <IngredientsDetails />
    </Modal>

  )
}

export default ModalDetailesIngredientPage