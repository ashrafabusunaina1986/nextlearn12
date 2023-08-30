'use client'
import React, { useEffect, useReducer } from 'react'
import styles from './calculator.module.css'


const initial = {
  result: "0",
  currentNum: "",
  o: false,
  eq: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'n':
      return {
        ...state,
        o: false,
        currentNum: state['currentNum'] === '' ? action.payload :
          state.eq ?
            action.payload :
            state['currentNum'].concat(action.payload),
        eq: false,
        result: eval(state['currentNum'].concat(action.payload))
      }
    case 'o':
      return {
        ...state,
        o: true,
        currentNum: OperandCurrentNum(state, action),
        result: state.result,
        eq: false
      }
    case 'delall':
      return {
        ...state,
        o: false,
        currentNum: state['currentNum'].replace(state.currentNum, ''),
        result: '0',
        eq: false
      }
    case 'delel':
      return {
        o: (state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('-') ||
          state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('+') ||
          state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('*') ||
          state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('/')) ? true : false,
        currentNum: cdelel(state),
        result: state.result,
        eq: true
      }
    case 'equal':
      return {
        o: isOperand(state),
        currentNum: CurrentNum(state),
        result: Result(state),
        eq: true
      }
    default:
      return state

  }

}

const rdelel = (state) => {
  if (state.eq) {
    if (state.currentNum === '') {
      return '0'
    }
    if (state.currentNum.length === 1) {
      return state.currentNum
    }
    if (state.currentNum.length > 1) {
      return state.o ?
        eval(state['currentNum'].slice(0, state['currentNum'].length - 1)) :
        eval(state['currentNum'].slice(0, state['currentNum'].length - 2))
    }
  }

}
const cdelel = (state) => {
  if (state.eq) {
    return state.currentNum
  } else {
    if (state.currentNum === '') {
      return ''
    } else {
      return state['currentNum'].slice(0, state['currentNum'].length - 1)
    }
  }

}
const OperandCurrentNum = (state, action) => {

  if (!state.o) {
    if (state.currentNum === '') {
      return ''
    }
    if (state.currentNum.length >= 1) {
      return state.eq ? state.result.toString().concat(action.payload) : state.currentNum.concat(action.payload)
    }
  } else {
    if (state.currentNum === '') {
      return ''
    }
    if (state.currentNum.length >= 1) {
      return state.eq ? state.result.toString().concat(action.payload) : state.currentNum.slice(0, state.currentNum.length - 1).concat(action.payload)
    }

  }
}
const isOperand = (state) => {
  return (state.currentNum === '' || state.currentNum.length === 1) ? false : (state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('-') ||
    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('+') ||
    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('*') ||
    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('/')) ? true : false
}

const Operand = (state) => {
  return ((state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('-') ||
    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('+') ||
    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('*') ||
    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('/')) ? true : false)
}
const CurrentNum = state => {
  return (
    (state.currentNum === '') ? '' : state.currentNum
  )
}


const Result = state => {

  if (!state.o) {
    if (state.currentNum === '') {
      return '0'
    }
    if (state.currentNum.length === 1) {
      return state.currentNum
    }
    if (state.currentNum.length > 1) {
      return Operand(state) ? eval(state['currentNum']) :
        eval(state.currentNum.slice(0, state.currentNum.length - 1))
    }
  } else {
    return Operand(state) ? eval(state['currentNum']) :
      eval(state.currentNum.slice(0, state.currentNum.length - 1))
  }
}

function Calculator() {
  const [calculate, dispatch] = useReducer(reducer, initial)
  useEffect(() => {
    console.log(calculate,Operand(calculate))
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
          <span>{calculate.currentNum}</span>
        </div>
        <div className={styles.nresult} >
          {calculate.currentNum.length === 0 &&
            calculate.result === '0'
            ? <span>{calculate.result}</span> : ''}
          {calculate.currentNum.length > 0 && calculate.result >= 0 ? <span>={calculate.result}</span> : ''}
          {calculate.currentNum.length > 0 && calculate.result < 0 ? <span>({calculate.result})</span> : ''}
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