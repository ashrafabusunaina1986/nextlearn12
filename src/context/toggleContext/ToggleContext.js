'use client'
import styles from './togglecontext.module.css'
import React, { useState } from "react"

export const TContext = React.createContext()
const ToggleContext = ({ children }) => {
    const [mode, SetMode] = useState('black')
    const toggle = () => {
        SetMode(prev => prev === 'black'?'blue' :'black')
    }
    return <TContext.Provider value={{ toggle, mode }}>
        {children}
    </TContext.Provider>
}

export { ToggleContext}