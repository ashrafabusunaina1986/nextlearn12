import React from 'react'
import styles from './page.module.css'
import Addusers from '../../components/addUser/Addusers'

function AddUsers(props) {
  return (
    // <div >

    <div className={styles.container}>
      <Addusers/>
    </div>
    // </div>
  )
}

export default AddUsers