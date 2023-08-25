import React from 'react'
import Card from '../UI/card/Card'
import styles from './adduser.module.css'

function ListUser(props) {
  return (
    <Card className={styles.users}>
        <ul>
            {
                props.users.map((user,id)=>{
                    return <li key={id}>
                        {user.username} ({user.age}  years old)
                    </li>
                })
            }
        </ul>
    </Card>
  )
}

export default ListUser