import React from 'react'
import styles from './button.module.css'

function Button(props) {
  return (
    <button onClick={props.addItemHandler}
        className={
          !props.isActive ?
            styles.button :
            styles.notDisplay
        } >
        {props.title}
      </button>
  )
}

export default Button