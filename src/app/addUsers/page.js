import React from 'react'
import styles from './page.module.css'
import Addusers from '../../components/addUser/Addusers'
import Addresses from '@/components/addresses/Addresses'

function AddUsers() {
  return (
    <div className={styles.content}>

    <Addresses/>
    <div className={styles.container}>
        <Addusers/>
    </div>
    </div>
  )
}

export default AddUsers