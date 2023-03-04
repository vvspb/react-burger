import React, { FC } from 'react'
import styles from './Modal-overlay.module.css'

interface IModalOverLayProps {
  onClick: ()=> void;
}

const ModalOverlay: FC<IModalOverLayProps> = (props: IModalOverLayProps) => {
  return (
    <div className={styles.modalOverlay}
     onClick = {props.onClick}
    >
    </div>
  )
}

export default ModalOverlay