'use client'

import Calculator from './components/Calculator/Calculator'
import styled from 'styled-components'

function CalculatorApp() {
    return (
        <Wrapper>
            <Calculator></Calculator>
        </Wrapper>
    )
}

export default CalculatorApp

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: whitesmoke;
`
