'use client'
import React, { useState } from 'react'
import styles from './data_entry.module.css'
import NotForm from './NotForm'
import Button from "@/components/Button/Button"

function Data_form(props) {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
    date: ''
  })

  const [isActive, setIsActive] = useState(false)

  const addItemHandler = (e) => {
    e.preventDefault()
    const title = e.target.innerHTML
    if (title === 'Cancel') {
      setIsActive(prev => !isActive)
    } else if (title === 'Add Item') {
      setIsActive(prev => !isActive)
      input.name === '' || input.date === ''
        || input.email === ''
        || input.message === ''
        || !isActive ? ''
        :
        props.setData([
          ...props.data, {
            id: props.data.length,
            input
          }
        ])

    }
  }

  const changeHandler = e => {
    const { name, value } = e.target
    setInput({
      ...input, [name]: value
    })
  }

  return (
    <div className={styles.container}>
      <Button
        isActive={isActive}
        addItemHandler={addItemHandler}
        title='Add Item'
      />
      <NotForm
        isActive={isActive}
        input={input}
        setInput={setInput}
        changeHandler={changeHandler}
        addItemHandler={addItemHandler} />
    </div>
  )
}

export default Data_form