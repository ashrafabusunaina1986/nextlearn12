'use client'
import React from 'react'
import styles from './errormodal.module.css'
import Card from '../card/Card'
import Button from '../button/Button'

function ErrorModal(props) {
    return (
        <div>
            <div className={styles.backdrop} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p>
                        {
                            props.message
                        }
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button adduser={props.onClick}>Okay</Button>
                </footer>
            </Card>
        </div>

    )
}

export default ErrorModal