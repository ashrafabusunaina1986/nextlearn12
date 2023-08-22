import React, { useState } from 'react'
import styles from './menu.module.css'

function Menu(props) {
  const items=props.items

  const selectIndexHandler=e=>{
      props.setIndex(e.target.id)
  }
  return (
    <menu className={styles.container}>
      {
        items.map(item=>{
          return <button className={styles.item}  onClick={selectIndexHandler} id={item.id}
          key={item.id}
          >{item.title}</button>
        })
      }
      
    </menu>
  )
}

export default Menu