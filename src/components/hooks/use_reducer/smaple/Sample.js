'use client'
import React from 'react'
import Styles from './sample.module.css'
import { useReducer } from 'react'
import Button from '@/components/Button/Button'


const initialValue = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increase':
            return state + 1
        case 'decrease':
            return state - 1
        default: return state
    }
}
function Sample() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div className={Styles.sample}>
            <div className={Styles.buttons}>
                <Button
                    className={Styles.button}
                    title='Increase'
                    addItemHandler={() => dispatch('increase')} />
                <div className={Styles.state}>
                    state:{count}
                </div>
                <Button
                    className={Styles.button}
                    title='Decrease'
                    addItemHandler={() => dispatch('decrease')} />
            </div>
        </div>
    )
}

export default Sample