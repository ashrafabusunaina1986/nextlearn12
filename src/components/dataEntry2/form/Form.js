'use client'

import styled from 'styled-components'

import React, { useState } from 'react'
import styles from './form.module.css'

const StyleForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    margin: auto;
    & div{
      margin: 5px auto;
    }
    & h1{
      font-size: 16px;font-weight: bold;
      color: ${(props) => {
    const goal = props.goal
    const isActive=props.isActive
    return  goal === '' && !isActive? 'red' : 'black'
  }};
    }

    & button{
      width: 500px;
      background-color: red;
      padding: 10px;
      border: 0.1 solid #aaa;
    }
    & input{
      background-color:${(props) => {
        const isActive=props.isActive
        const goal = props.goal
        return goal === '' && !isActive? '#f88' : '#fff'
  }}; 
      width: 500px;
      padding: 10px;
      border: 0.1 solid #aaa;
    }
`


function Form(props) {
  const [goal, setGoal] = useState('')
  const [isActive,setIsActive]=useState(true)
  const addHandler = (e) => {
    e.preventDefault()
    if (goal.trim().length===0) {
      setIsActive(false)
    } else {
      setIsActive(true)
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
    <StyleForm goal={goal} isActive={isActive}>
      <div>
        <h1  >Goal course</h1>
      </div>
      <div>
        <input type="text"

          onChange={e => setGoal(e.target.value)} />
      </div>
      <div>
        <button
          onClick={addHandler}>Add</button>
      </div>
    </StyleForm>
  )
}

export default Form