'use client'

import React, { useState } from 'react'
import styles from './form.module.css'



function Form(props) {
  const [goal, setGoal] = useState(null)
  const addHandler = (e) => {
    e.preventDefault()
    if (goal===null) {
      return ''
    } else {
      
      props.setData([
        ...props.data, {
          id: props.data.length,
          goal: goal
        }
      ])
    }
  }
  console.log(goal)
  return (
    <form className={styles.form}>
      <div>
        <h1 className={
          goal ===null || goal ?
            styles.goal :
            styles.goal + ` ${styles.nth}`
        } >Goal course</h1>
      </div>
      <div>
        <input type="text"

          onChange={e => setGoal(e.target.value)}
          className={
            goal || goal===null? `${styles.input}` :
              `${styles.not} `} />
      </div>
      <div>
        <button
          onClick={addHandler}
          className={styles.button}>Add</button>
      </div>
    </form>
  )
}

export default Form