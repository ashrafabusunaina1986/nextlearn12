'use client'
import React, { useContext } from 'react'
import styles from './btntoggle.module.css'
import  { TContext } from '@/context/toggleContext/ToggleContext'

function BtnToggle(props) {
  const {toggle,mode}=useContext(TContext)
  
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.floor} >
        <div className={styles.black} ></div>
        <div className={styles.blue} ></div>
      </div>
      <div className={`${styles.btn} ${mode}`} />
    </div>

  )
}

export default BtnToggle