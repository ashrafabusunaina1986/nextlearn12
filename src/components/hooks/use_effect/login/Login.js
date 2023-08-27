'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './login.module.css'
import Button from '../../../Button/Button'

function Login(props) {
  const emailRef = useRef()
  const passRef = useRef()
  const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [password, setPassword] = useState('')
  const [passIsValid, setPassIsValid] = useState(true)
  const [isLogged,setislogged]=useState('0')
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePass = e => {
    setPassword(e.target.value)
  }

  const isValidInput = (e) => {
    if (e.target.id === 'email') {
      setEmailIsValid(email.includes('@'))
    } else
      if (e.target.id === 'password') {
        setPassIsValid(password.trim().length > 5)
      }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!email.includes('@') || password.trim().length === 0) {
      localStorage.setItem('isLogged', '0')
      
    } else {
      localStorage.setItem('isLogged', '1')
    }
    setislogged(localStorage.getItem('isLogged'))


  }
  
  useEffect(() => {

    const t=setTimeout(() => {
      console.log('steps run')
      props.setIsActive(email.includes('@')
        &&
        password.trim().length > 5 && isLogged==='1')
      

      
    }, 1000);
    return ()=>{
      console.log({email,password,clean:'cleanup',isLogged})
      clearTimeout(t)
    }
  }, [email, password,isLogged])



  return (
    <form onSubmit={submitHandler} className={styles.form}>

      <div className={styles.email}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id='email' onChange={changeEmail} value={email}
          className={styles.input + ` ${emailIsValid ? '' : styles.inputError}`}
          onBlur={isValidInput}
          ref={emailRef}
        />
      </div>
      <div className={styles.password}>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' onChange={changePass} value={password}
          className={styles.input + ` ${passIsValid ? '' : styles.inputError}`}
          onBlur={isValidInput}
          ref={passRef}
        />
      </div>
      <Button title='Enter'  className={styles.button} />
    </form>
  )
}

export default Login