'use client'
import React, { useRef, useState } from 'react'
import Sample from './smaple/Sample'
import Calculator from './calculatur/Calculator'
import styles from './usereducer.module.css'
import Link from 'next/link'

const items = [
  {
    id: 1,
    title: 'Increase',
    page: <Sample />
  },
  {
    id: 2,
    title: 'Calculator',
    page: <Calculator />
  }

]
function Use_Reducer() {
  const [item,setItem]=useState(1)
  return (
    <div className={styles.reducer} >
      
      <div className={styles.menu}>
        {
          items.map(item => {
            return <span 
            onClick={(e)=>{
              setItem(e.target.id.slice(1,2))
            }} id={'#'+item.id} key={item.id}>
              {item.title}
            </span>
          })
        }
      </div>
      <div className={styles.show}>
        {
          items[item-1].page
        }
      </div>
    </div>
  )
}

export default Use_Reducer