'use client'
import React, { useState } from 'react'
import styles from './data_entry2.module.css'
import Form from './form/Form'
import View from './view/View'

function Data_Entry2() {
  const [data,setData]=useState([])
  return (
    <div className={styles.container}>
        <Form data={data} setData={setData}/>
        <View data={data}/>
    </div>
  )
}

export default Data_Entry2