'use client'
import React, { useState } from 'react'
import styles from './form.module.css'

const initialUser = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 5
}
function Form(props) {
  const [userInput, setUserInput] = useState(initialUser)
  const calculateHandler = event => {
    event.preventDefault()
    props.onCalculate(userInput)
  }

  const resetHandler = () => {
    setUserInput(initialUser)
    console.log('RESET')
  }

  const inputChangeHandler = (e) => {
    const { id, value } = e.target
    setUserInput(prevInput => {
      return {
        ...prevInput, [id]: value
      }
    })
    console.log(id, value)
  }
  return (
    <form onSubmit={calculateHandler} className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput['current-savings']}
            type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput['yearly-contribution']}
            type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={inputChangeHandler}
            value={userInput['expected-return']}
            type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput.duration}
            type="number" id="duration" />
        </p>
      </div>
      <p className={styles.actions}>
        <button onClick={resetHandler} type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default Form