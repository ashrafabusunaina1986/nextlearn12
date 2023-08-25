'use client'
import React, { useState } from 'react'
import Card from '../UI/card/Card'
import Button from '../UI/button/Button'
import styles from './adduser.module.css'

import ErrorModal from './../UI/errorModal/ErrorModal'

function Adduser(props) {
    const [username, setUsername] = useState('')
    const [Age, setAge] = useState('')
    const [error, setError] = useState(null)

    const usernameChange = e => {
        setUsername(e.target.value)
    }
    const ageChange = e => {
        setAge(e.target.value)
    }

    const adduserHandler = e => {
        e.preventDefault()

        if (username.trim().length === 0 || Age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Invalid input,Please enter the username and age '
            }
            )
            return
        } else
            if (+Age < 1) {
                setError({
                    title: 'Invalid age',
                    message: 'Invalid age,Please enter the age',
                }
                )
                return
            }
        console.log(username, Age)
        props.setUsers([...props.users, {
            username: username,
            age: Age
        }])

        setAge('')
        setUsername('')
    }
    const notError=()=>{
        setError(null)
    }
    return (

        <div>
            {
                error && <ErrorModal
                    title={error.title}
                    message={error.message}
                    onClick={notError}
                />
            }
            <Card className={styles.input}>
                <form onSubmit={adduserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username'
                        value={username}
                        onChange={usernameChange}
                    />
                    <label htmlFor="age">Age ( year )</label>
                    <input type="number" id='age'
                        value={Age}
                        onChange={ageChange}
                    />
                    <Button type='submit'>
                        Add user
                    </Button>
                </form>
            </Card>
        </div>

    )
}

export default Adduser