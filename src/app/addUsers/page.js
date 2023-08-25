import React from 'react'
import styles from './page.module.css'
import Addusers from '../../components/addUser/Addusers'

function AddUsers() {
  return (
    <div className={styles.container}>
        <Addusers/>
    </div>
  )
}

export default AddUsers