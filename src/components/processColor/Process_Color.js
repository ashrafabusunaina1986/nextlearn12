'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './processcolor.module.css'
import { TContext } from '@/context/toggleContext/ToggleContext'
import { ColorContext } from '@/context/colorcontext/Color_Context'


function Process_Color(props) {
  const { mode } = useContext(TContext)
  const { btnRef ,floorRef} = useContext(ColorContext)
  
  return (
    <div className={styles.container}  >
      <div ref={floorRef} className={styles.floor} ></div>
      <div className={`${styles.btn} ${props.className}`} ref={btnRef}
      />
    </div>
  )
}

export default Process_Color