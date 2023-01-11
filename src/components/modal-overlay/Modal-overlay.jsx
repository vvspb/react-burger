import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal-overlay.module.css'

const ModalOverlay = (props) => {
  return (
    <div className={styles.modalOverlay}
     onClick = {props.onClick}
    >
    </div>
  )
}

ModalOverlay.propTypes ={
  onClick: PropTypes.func
}

export default ModalOverlay