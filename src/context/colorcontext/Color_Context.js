'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './color_context.module.css'
import { createContext } from 'react'


export const ColorContext = createContext()

function Color_Context({ children }) {
  const floorRef = useRef(null)
  const btnRef = useRef(null)
  const x = useRef({
    startX: 0,
    lastX: 0,
  })
  const [color,setColor]=useState(0)
  const btnWidth = useRef({
    btnWidth: 0
  })
  const percentNextX = useRef(0)
  const isClicked = useRef(false)

  useEffect(() => {
    if (!floorRef.current || !btnRef.current) return
    const floor = floorRef.current
    const btn = btnRef.current
    console.log()
    const onMousedown = (e) => {
      isClicked.current = true
      x.current.startX = e.clientX
      btnWidth.current.btnWidth = e.target.clientWidth
    }
    const onMouseup = (e) => {
      isClicked.current = false
      x.current.lastX = btn.offsetLeft
    }

    const onMousemove = (e) => {
      if (!isClicked.current) return
      const floorWidth = e.target.clientWidth
      const xs=x.current.startX
      const nextx = (e.clientX-x.current.startX)*100/floorWidth
      // const percent = e.target.clientWidth * 100 / screen.width
      // const percentnextX = 17 * 100 / e.target.clientWidth
      if (nextx < 0){
        btn.style.left = `0%`
        setColor(0)
      } 
      
      if (nextx > 89.5) {
        btn.style.left = `88.8%`
        setColor(89.5)
      }
      if (nextx >= 0 && nextx <= 89.5) {
        btn.style.left = `${nextx}%`
        setColor(nextx)
      }
    }
    const onClick=e=>{
      const x=floor.getBoundingClientRect().left
      const floorWidth = e.target.clientWidth
      const screenWidth=screen.width
      const pfs=floorWidth*100/screenWidth
      const mouseXb=(x)*100/screenWidth
      const mouseXa=e.clientX*100/screenWidth
      const clientX=e.clientX
      
      const percentfloorposition=mouseXa-mouseXb
      const mouseWidth=percentfloorposition*screenWidth/100
      const nextx=mouseWidth*100/floorWidth

      if (nextx >= 0 && nextx <= 89.5) {
        btn.style.left = `${nextx}%`
        setColor(nextx)
      }

      if (nextx < 0){
        btn.style.left = `0%`
        setColor(0)
      } 
      
      if (nextx > 89.5) {
        btn.style.left = `88.8%`
        setColor(89.5)
      }
      console.log({nextx,mouseXa,mouseXb,percentfloorposition,x,clientX,pfs,floorWidth,mouseWidth})
    }
    

    btn.addEventListener('mousedown', onMousedown)
    btn.addEventListener('mouseup', onMouseup)
    floor.addEventListener('mousemove', onMousemove)

    floor.addEventListener('click', onClick)
    return () => {
      btn.removeEventListener('mousedown', onMousedown)
      btn.removeEventListener('mouseup', onMouseup)
      floor.removeEventListener('mousemove', onMousemove)

      floor.removeEventListener('click', onClick)
    }
  })

  return <ColorContext.Provider value={{ btnRef,color, floorRef }}>
    {children}
  </ColorContext.Provider>
}

export default Color_Context