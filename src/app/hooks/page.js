import React from 'react'
import styles from './page.module.css'
import Addresses from '@/components/addresses/Addresses'

function Hooks() {
  return (
    <div className={styles.content}>
      <Addresses />
      <div className={styles.container}>
        My Hooks
      </div>
    </div>
  )
}

export default Hooks