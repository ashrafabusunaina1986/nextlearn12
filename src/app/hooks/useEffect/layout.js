'use client'
import React, {useEffect, useState } from 'react'
import Header from '@/components/hooks/use_effect/header/Header'
import styles from './layout.module.css'
import UseEffect from './page'

function Layout(props) {


  const [isActive,setIsActive]=useState(false)
  const activeHandler=()=>{
    localStorage.setItem('isLogged','0')
    setIsActive(false)
  }
  useEffect(()=>{
    const isLogged=localStorage.getItem('isLogged')
    isLogged==='1'?setIsActive(true):setIsActive(false)
  },[])
  return (
    <div className={styles.layout}>
        <Header auth={isActive} activeHandler={activeHandler}/>
        <UseEffect setIsActive={setIsActive} isActive={isActive} />
    </div>
  )
}

export default Layout