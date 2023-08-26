'use client'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styles from './page.module.css'
import Button, { FancyButton, TypeButton, Animate, ThemeButton } from '../../components/styleButton/Button'

const theme = {
    dark: {
        primary: '#000',
        text: '#fff'
    },
    light: {
        primary: '#fff',
        text: '#000'
    }
}

const GlobalStyle = createGlobalStyle`
    button{
        border-radius: 10px;
        background: linear-gradient(to top ,#567,#110);
        box-shadow: 0 9px 10px 9px #5ff;
    }
`
function Buttons() {
    return (
        <div  >

            <ThemeProvider theme={theme}>
                <div>
                    <GlobalStyle />
                    <Button>send</Button>
                    <br /><br />
                    <Button variant='outline'>send</Button>
                    <br /><br />
                    <ThemeButton>Send</ThemeButton>
                    <br /><br />
                    <FancyButton>Send</FancyButton>
                    <br /><br />
                    <TypeButton>Send</TypeButton>
                    <br /><br />
                    <Animate>Send</Animate>
                </div>

            </ThemeProvider>

        </div>
    )
}

export default Buttons