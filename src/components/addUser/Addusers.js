'use client'
import React, { useState } from 'react'
import styles from './addusers.module.css'
import Adduser from './users/Adduser'
import ListUser from './users/ListUser'

function Addusers() {
  const [users,setUsers]=useState([])
  return (
    <div className={styles.container}>
      
        <Adduser users={users} setUsers={setUsers}/>
        <ListUser users={users}/> 
    </div>
  )
}

export default Addusers