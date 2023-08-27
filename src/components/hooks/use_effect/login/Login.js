'use client'
import React, { useRef, useState } from 'react'
import styles from './login.module.css'
import Button from '../../../Button/Button'

function Login(props) {
  const emailRef=useRef()
  const passRef=useRef()


  const loginHandler=(e)=>{
    e.preventDefault()
    const email=emailRef.current.value
    const pass=passRef.current.value
    if(email.trim().length===0 || pass.trim().length===0){
      props.setIsActive(false)
    }else{
      props.setIsActive(true)
    }
    
  }
  
  return (
    <form className={styles.form}>
      
      <div className={styles.email}>
      <label htmlFor="email">E-mail</label>
      <input type="email" id='email'
      ref={emailRef}
      />
      </div>
      <div className={styles.password}>
      <label htmlFor="password">Password</label>
      <input type="password" id='password' 
      ref={passRef}
      />
      </div>
      <Button title='Enter' addItemHandler={loginHandler} className={styles.button}/>
    </form>
  )
}

export default Login