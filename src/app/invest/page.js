
import React from 'react'
import Investt from '@/components/invest/Investt'
import styles from './page.module.css'
import Addresses from '@/components/addresses/Addresses'

function Invest() {
  
  return (
    <div className={styles.content} >
      <Investt/>
    </div>
  )
}

export default Invest