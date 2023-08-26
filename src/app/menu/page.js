
import React from 'react'
import styles from './page.module.css'
import Menus from '@/components/Menu/menus/Menus'
import Addresses from '@/components/addresses/Addresses'

function Menu() {
  return (
    <div className={styles.content}>
      <Addresses />
      <div className={styles.container}>
        <Menus />
      </div>
    </div>

  )
}

export default Menu