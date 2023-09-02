'use client'
import React, { useContext, useState } from 'react'
import styles from './color_context.module.css'
import { createContext } from 'react'


export const ColorContext = createContext()

function Color_Context({ children }) {
  const [color, setColor] = useState(0)
  const changeColor1 = (e) => {
    setColor(e.clientX)
    console.log(color)
  }
  return <ColorContext.Provider value={{ changeColor1, color }}>
    {children}
  </ColorContext.Provider>
}

export default Color_Context