import styled, { keyframes } from 'styled-components'

export const StyledButton = styled.button`
    border: 5px solid #3f5;
    box-shadow: 0 0 5px 10px #357;
    background-color:${(props) => props.variant === 'outline' ? '#555' : 'white'};
    margin: 20px ;
    padding: 30px 40px;
    border-radius: 50px;
    color:${(props) => props.variant === 'outline' ? 'white' : '#555'};
`


export const FancyButton = styled(StyledButton)`
    background: linear-gradient(to left ,red,black);
    color: wheat;
`

export const TypeButton = styled(StyledButton).attrs({
    type: 'submit'
})`
background-color:#f6e;
color:#0f0;
font-weight: bold;
font-size: 20px;
&:hover{
    background-color:#3e4;
    box-shadow:0 9px #567;
    color:black;
}
`

const rotate = keyframes`
from{transform:rotate(0deg)}
to{transform:rotateX(360deg)}
`

export const Animate=styled(TypeButton)`
animation: ${rotate} 2s infinite linear;
`

export const ThemeButton=styled(StyledButton)`
    background-color: ${(props)=> props.theme.dark.primary};
    color: ${(props)=>props.theme.dark.text};
    box-shadow: 0 9px ${(props)=>props.theme.dark.primary};
`