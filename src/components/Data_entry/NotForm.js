import React from 'react'
import styles from './form.module.css'
import Button from '../Button/Button'

function NotForm(props) {
  const isActive = props.isActive
  const changeHandler=props.changeHandler
  return (
    <form
      className={
        isActive ?
          styles.form
          :
          styles.notDisplay
      }
    >
      <h1>Add Item</h1>
      <div className={styles.entry}>
        <div>
          <input type="text" name='name'
          onChange={changeHandler}
          placeholder='Name...' />
        </div>
        <div>
          <input type="email" 
          onChange={changeHandler}
          name='email' placeholder='Email...' />
        </div>
        <div>
          <input type="date" name='date'
          onChange={changeHandler}
          placeholder='dd/mm/yyyy'
            min="2010-01-01" max="2023-12-31" />
        </div>
        <div>
          <textarea name="message" className={styles.txt}
          onChange={changeHandler}
          id="" cols="3" rows="1" placeholder='Message...'></textarea>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button isActive={!isActive}
          addItemHandler={props.addItemHandler}
          title='Add Item' />
        <Button isActive={!isActive}
          addItemHandler={props.addItemHandler}
          title='Cancel' />
      </div>

    </form>
  )
}

export default NotForm