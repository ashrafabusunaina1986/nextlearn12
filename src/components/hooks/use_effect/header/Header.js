import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import Button from '@/components/Button/Button'

function Header(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo} >
        <h1>A typical page</h1>
      </div>

      {props.auth && <div className={styles.logout}>
          <div><Link href='#'>Users</Link></div>
          <div><Link href='#'>Admin</Link></div>
          <Button className={styles.button} title='Logout'
            addItemHandler={props.activeHandler}
          />

        </div>
      }
    </div>
  )
}

export default Header