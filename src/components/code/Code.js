'use client'
import React from 'react'
import styles from './code.module.css'
import Link from 'next/link'

function Code() {
    const name=window.location.pathname   
    const path=`https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app${name}/page.js`
  return (
    <div className={styles.code}>
        <p>The path resources:</p>
        <code>
            <Link 
            href={path}>
                here
            </Link>
        </code>
    </div>
  )
}

export default Code