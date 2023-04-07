import React, { FC, PropsWithChildren, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/Modal-overlay'
import styles from './Modal.module.css'

const modalRoot = document.getElementById('root-modals');

interface IModalProps {
  onClose: () => void;
  title?: string;
}
const Modal: FC<PropsWithChildren<IModalProps>> = ({ onClose, children, title }: PropsWithChildren<IModalProps>): React.ReactPortal => {

  useEffect(() => {
    const handleDownEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    }

    document.addEventListener('keydown', handleDownEsc);

    return () => document.removeEventListener('keydown', handleDownEsc)
  }, [onClose]);

  const styleTitle = title?.[0] === '#' ?
    `${styles.titleNum} text text_type_digits-default` : `${styles.title} text text_type_main-medium`

  const styleBgModal = title === 'Меню' ? `${styles.bgModalForMenu}` : '';

  return ReactDOM.createPortal(
    <>
      <div className={`${styles.modalContainer} ${styleBgModal}`}>
        <header className={`${styles.headerModal}  ${styleBgModal}`}>
          <h3
            className={styleTitle}>
            {title}
          </h3>
          <button className={`${styles.closeButtonIcon}  ${styleBgModal}`} type='button' data-cy={'close'}>
            <CloseIcon type='primary' onClick={onClose} />
          </button>
        </header>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>, modalRoot!
  )
}

export default Modal;