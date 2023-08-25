import React from 'react'
import styles from './button.module.css'

function Button(props) {
  return (
    <button className={styles.button}
    type={props.type || "button"}
    onClick={props.adduser}
    >
        {props.children}
    </button>
  )
}

export default Button