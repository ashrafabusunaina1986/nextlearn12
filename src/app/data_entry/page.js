'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import DataEntry from '../../components/Data_entry/Data_form'
import Result from '../../components/Data_entry/Result'

function Data_entry() {
  const [data, setData] = useState([])
  return (
    // <div >
      <div className={styles.container}>
        <DataEntry setData={setData} data={data} />
        <Result data={data} />
      </div>
    // {/* </div> */}

  )
}

export default Data_entry