import React from 'react'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.container}>
        <div className={styles.logo} ></div>
        <div><h1>TEACHING REACTJS AND NEXTJS</h1></div>
    </header>
  )
}

export default Header