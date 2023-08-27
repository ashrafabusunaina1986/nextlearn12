
import React from 'react'
import styles from './useeffect.module.css'
import Login from './login/Login'
import Home from './home/Home'

function Use_effect(props) {

  return (
    <div className={styles.container}>
      {!props.isActive && <Login setIsActive={props.setIsActive} />}
      {props.isActive && <Home/>}
    </div>
  )
}

export default Use_effect