import React from 'react'
import styles from './page.module.css'
import Data_Entry2 from '@/components/dataEntry2/Data_Entry2'
import Addresses from '@/components/addresses/Addresses'

function DataEntery2() {
  return (
    <div className={styles.content}>
      <Addresses />
      <div className={styles.container}>
        <Data_Entry2 />
      </div>
    </div>
  )
}

export default DataEntery2