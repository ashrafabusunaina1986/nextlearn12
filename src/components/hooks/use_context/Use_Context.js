import React from 'react'
import styles from './usecontext.module.css'
import BtnToggle from '@/components/btntoggle/BtnToggle'

function Use_Context() {
  return (
    <div className={styles.container} >
      <BtnToggle/>
      <div className={styles.box} ></div>
    </div>
  )
}

export default Use_Context