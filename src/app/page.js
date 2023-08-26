'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Addresses from '@/components/addresses/Addresses'


import { useState } from 'react'
import Link from 'next/link'



export default function Home() {
  const [show, setShow] = useState(0)
  const selectItem = e => {
    setShow(e.target.id.slice(1, 2))
  }
  console.log(show)
  return (
    <main className={styles.container}>
      <Addresses/>
    </main>
  )
}
