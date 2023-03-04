import React, { FC, PropsWithChildren, useEffect } from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/Modal-overlay'
import styles from './Modal.module.css'

const modalRoot = document.getElementById('root-modals');

interface IModalProps {
  onClose: ()=> void;
  title?: string;
}
const Modal: FC<PropsWithChildren<IModalProps>> = ({onClose, children, title}: PropsWithChildren<IModalProps>): React.ReactPortal => {

  useEffect(() => {
    const handleDownEsc = (e: { key: string }) => {
      e.key === 'Escape' && onClose();
    }

    document.addEventListener('keydown', handleDownEsc);

    return () => document.removeEventListener('keydown', handleDownEsc)
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalContainer}>
        <header className={styles.headerModal}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.closeButtonIcon} type='button'>
            <CloseIcon type='primary' onClick={onClose} />
          </button>
        </header>
          {children}
      </div>
      <ModalOverlay onClick={onClose}/>
    </>, modalRoot!
  )
}


export default Modal;