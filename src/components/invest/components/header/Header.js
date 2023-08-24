import Image from 'next/image';
import logo from '../../../../../public/investment-calculator-logo.png'
import React from 'react'
import styles from './header.module.css'

function Header() {
  return (
    <div>
        <header className={styles.header}>
        <Image width={400} height={300} src={logo} alt='invest'/>
        <h1>Investment Calculator</h1>
      </header>
    </div>
  )
}

export default Header