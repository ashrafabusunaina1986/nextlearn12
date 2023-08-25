'use client'
import React, { useRef, useState } from 'react'
import Card from '../UI/card/Card'
import Button from '../UI/button/Button'
import styles from './adduser.module.css'
import Wrapper from '../UI/helpers/Wrapper'
import ErrorModal from './../UI/errorModal/ErrorModal'

function Adduser(props) {
    const nameInput=useRef()
    const ageInput=useRef()
    const [error, setError] = useState(null)


    const adduserHandler = e => {
        e.preventDefault()
        const name=nameInput.current.value
        const age=ageInput.current.value

        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Invalid input,Please enter the username and age '
            }
            )
            return
        } else
            if (+age < 1) {
                setError({
                    title: 'Invalid age',
                    message: 'Invalid age,Please enter the age',
                }
                )
                return

            }
            props.setUsers([
                ...props.users,{
                    username:name,
                    age:age
                }
            ])
        console.log(nameInput,ageInput)
    
            nameInput.current.value=''
            ageInput.current.value=''
    }
    const notError = () => {
        setError(null)
    }
    const modal = () => {
        return error && <ErrorModal
            title={error.title}
            message={error.message}
            onClick={notError}
        />

    }
    const card = () => {
        return (<Card className={styles.input}>
            <form onSubmit={adduserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id='username'
                    ref={nameInput}
                />
                <label htmlFor="age">Age ( year )</label>
                <input type="number" id='age'
                    ref={ageInput}
                />
                <Button type='submit'>
                    Add user
                </Button>
            </form>
        </Card>)
    }
    return (

        <Wrapper>
            {modal()}
            {card()}
        </Wrapper>

    )
}

export default Adduser