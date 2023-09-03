'use client'
import React, { useContext, useState } from 'react'
import styles from './usecontext.module.css'
import BtnToggle from '@/components/btntoggle/BtnToggle'
import Process_color from '@/components/processColor/Process_Color'
import { TContext } from '@/context/toggleContext/ToggleContext'
import Color_Context, { ColorContext } from '@/context/colorcontext/Color_Context'

function Use_Context() {
  const { mode } = useContext(TContext)
  const {color}=useContext(ColorContext)

  console.log(mode)
  return (
    <div className={styles.container} >
      <BtnToggle />
      <div className={`${styles.box} ${mode === 'black' ? styles.blue : styles.black}`}
        style={mode === 'blue' ? { backgroundColor: `hsl(0, 0%, ${color}%)` } :
          { backgroundColor: `hsl(240, ${90-color}%, 50%)` }}></div>
      <Process_color className={mode==='black'?styles.blue:styles.black}/>
    </div>
  )
}

export default Use_Context