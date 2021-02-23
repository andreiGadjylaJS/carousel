import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    color: #fff;
    outline: none;
    border: none;
    background-color: #333;
    margin-bottom: 1rem;
`

const Button = ({ children, primary }) => {
    return (
        <StyledButton primary={primary}>
            {children}
        </StyledButton>
    )
}

export default Button