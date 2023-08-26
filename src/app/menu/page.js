
import React from 'react'
import styles from './page.module.css'
import Menus from '@/components/Menu/menus/Menus'

function Menu() {
  return (
    <div >
      <div className={styles.container}>
        <Menus />
      </div>
    </div>

  )
}

export default Menu