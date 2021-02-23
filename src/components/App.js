import React, { Component } from 'react'
import '../styles/App.css'
import styled from 'styled-components'
import Button from './Button'

const MainWrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column

`

const App = () => {
    return (
        <MainWrapper>
            <Button primary> my button</Button>
            <Button >my button</Button>
        </MainWrapper>
    )
}


export default App