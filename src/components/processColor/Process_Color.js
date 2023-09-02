'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './processcolor.module.css'
import { TContext } from '@/context/toggleContext/ToggleContext'
import { ColorContext } from '@/context/colorcontext/Color_Context'


function Process_Color(props) {
  const btnRef = useRef(null)
  const floorRef = useRef(null)
  const isClicked = useRef(false)
  const coords = useRef({
    startX: 0,
    lastX: 0
  })
  const { mode } = useContext(TContext)
  const { changeColor1 } = useContext(ColorContext)
  useEffect(() => {
    if (!btnRef.current || !floorRef.current) return
    const btn = btnRef.current
    const floor = floorRef.current

    const mouseDown = (e) => {
      isClicked.current = true
      coords.current.x = e.clientX
    }
    const mouseUp = (e) => {
      isClicked.current = false
      coords.current.lastX = btn.offsetLeft
    }

    const mouseMove = (e) => {
      if (!isClicked.current) return
      const nextX = e.clientX - (coords.current.x + coords.current.lastX + 3)

      if (nextX > 0 && nextX < 156){
        props.setColor(nextX)
         btn.style.left = `${nextX}px`
      }
      else btn.style.left='0px'
    }

    btn.addEventListener('mousedown', mouseDown)
    btn.addEventListener('mouseup', mouseUp)

    floor.addEventListener('mousemove', mouseMove)

    const cleanUp = () => {
      btn.removeEventListener('mousedown', mouseDown)
      btn.removeEventListener('mouseup', mouseUp)
      floor.removeEventListener('mousemove', mouseMove)
    }
    return cleanUp
  })
  return (
    <div className={styles.container}  >
      <div ref={floorRef} className={styles.floor} ></div>
      <div ref={btnRef} className={`${styles.btn} ${props.className}`}
      
      />
    </div>
  )
}

export default Process_Color