import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

function Footer() {
    return (
        <footer className={styles.container}>
            <p>
                The code is <Link href="https://github.com/ashrafabusunaina1986/nextlearn12">
                    here
                </Link>
            </p>
        </footer>
    )
}

export default Footer