import React from 'react'
import styles from './btntoggle.module.css'

function BtnToggle() {
  return (
    <div className={styles.container} >
        <div className={styles.floor} >
            <div className={styles.black} ></div>
            <div className={styles.blue} ></div>
        </div>
        <div className={styles.btn}/>
    </div>
  )
}

export default BtnToggle