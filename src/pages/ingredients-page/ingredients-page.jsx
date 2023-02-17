import React from 'react'
import InredientsDetails from '../../components/ingredients-details/Ingredients-details'
import styles from './ingredients-page.module.css'

const IngredientsPage = () => {
  return (
    <div className={styles.wrapper}>
        <InredientsDetails/>
    </div>
  )
}

export default IngredientsPage