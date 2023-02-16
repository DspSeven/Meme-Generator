// Style your components here
import Styled from 'styled-components'

export const CustomForm = Styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 250px;
`

export const CustomContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: url(${props => props.backgroundImage});
background-size: cover;
height: 90vh;
width: 50vw;
margin-left: 50px;
margin-top: 50px;`

export const Container = Styled.div`
display: flex;
justify-content: center;
align-items: flex-start;`

export const Heading = Styled.h1`
color: ${props => (props.outline ? '#ffffff' : '#0070c1')};
font-family: "Roboto";
`

export const LabelHeading = Styled.label`
color: #ffffff;
font-family: "Roboto";`

export const InputHeading = Styled.input`
background-color: transparent;
border-radius: 7px;
border-width: 1px;`

export const Paragraph = Styled.p`
color: #ffffff;
font-family: "Roboto";
font-size: ${props => props.fontSize}px;`

export const CustomButton = Styled.button`
color: "#ffffff";
background-color: "#0070c1";
border-radius: 7px`
