'use client'
import React, { useContext, useState } from 'react'
import styles from './usecontext.module.css'
import BtnToggle from '@/components/btntoggle/BtnToggle'
import Process_color from '@/components/processColor/Process_Color'
import { TContext } from '@/context/toggleContext/ToggleContext'
import { ColorContext } from '@/context/colorcontext/Color_Context'

function Use_Context() {
  const { mode } = useContext(TContext)
  const [color, setColor] = useState(0)

  console.log(mode)
  return (
    <div className={styles.container} >
      <BtnToggle />
      <div className={`${styles.box} ${mode === 'black' ? styles.blue : styles.black}`}
        style={mode === 'blue' ? { backgroundColor: `rgb(${color},${color},${color})` } :
          { backgroundColor: `rgb(${color},${color},255)` }}></div>
      {mode === 'black' && <Process_color className={styles.blue}
        setColor={setColor}
      />}
      {mode === 'blue' && <Process_color className={styles.black}
        setColor={setColor}
      />}
    </div>
  )
}

export default Use_Context