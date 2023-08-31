'use client'
import React, { useEffect, useReducer } from 'react'
import styles from './calculator.module.css'
import { initial, reducer, Operand} from '@/methods/calculator/Methods'



function Calculator() {
  const [calculate, dispatch] = useReducer(reducer, initial)
  useEffect(() => {
    console.log(calculate)
  })
  
  const number = e => {
    dispatch({ payload: e.target.value, type: 'n' })
  }
  const operator = (e) => [
    dispatch({ payload: e.target.value, type: 'o' })
  ]
  const delel = () => {
    dispatch({ type: 'delel' })
  }
  const delall = () => {
    dispatch({ type: 'delall' })
  }
  const equal = () => {
    dispatch({ type: 'equal' })
  }
  return (
    <div className={styles.calculator}>
      <div className={styles.result} >
        <div className={styles.oresult}>
          <span className={calculate.eq?styles.notequal:styles.equal}>{calculate.currentNum}</span>
        </div>
        <div className={styles.nresult} >
          {calculate.currentNum.length === 0 &&
            calculate.result === '0'
            ? <span className={calculate.eq?calculate.result==='0'?styles.notequal:styles.equal:styles.notequal} >{calculate.result}</span> : ''}
          {calculate.currentNum.length > 0 && calculate.result >= 0 ? <span className={calculate.eq?styles.equal:styles.notequal} >={calculate.result}</span> : ''}
          {calculate.currentNum.length > 0 && calculate.result < 0 ? <span className={calculate.eq?styles.equal:styles.notequal} >({calculate.result})</span> : ''}
        </div>
      </div>
      <button onClick={delall} className={styles.span1}>AC</button>
      <button onClick={delel} value="C">C</button>
      <button onClick={operator} value="/">/</button>
      <button onClick={number} value="1">1</button>
      <button onClick={number} value="2">2</button>
      <button onClick={number} value="3">3</button>
      <button onClick={operator} value="+">+</button>
      <button onClick={number} value="4">4</button>
      <button onClick={number} value="5">5</button>
      <button onClick={number} value="6">6</button>
      <button onClick={operator} value="-">-</button>
      <button onClick={number} value="7">7</button>
      <button onClick={number} value="8">8</button>
      <button onClick={number} value="9">9</button>
      <button onClick={operator} value="*">*</button>
      <button disabled></button>
      <button onClick={number} value="0">0</button>
      <button onClick={equal} value="=" className={styles.spaneq}>=</button>
    </div>
  )
}

export default Calculator