'use client'

import {
    ButtonsWrapper,
    ButtonWrapper,
    DisplayWrapper,
    EightButton,
    FiveButton,
    FourButton,
    NineButton,
    OneButton,
    PlusButton,
    SevenButton,
    SixButton,
    ThreeButton,
    TwoButton,
    ZeroButton,
} from '@/app/play/calculator/components/Calculator/Calculator.styles'
import CalculatorButton from '@/app/play/calculator/components/Button/CalculatorButton'
import Display from '@/app/play/calculator/components/Display/Display'
import { useState } from 'react'
import { OPERATIONS } from '@/app/play/calculator/consts/operations'

function Calculator() {
    const [memory, setMemory] = useState<number>(0)
    const [currentOperation, setCurrentOperation] = useState<OPERATIONS>(
        OPERATIONS.add
    )

    const [currentValue, setCurrentValue] = useState<number>(0)

    function addDigit(digit: number) {
        const currentValueString = String(currentValue)
        setCurrentValue(+`${currentValueString}${digit}`)
    }

    function add() {
        setMemory(currentValue + memory)
        setCurrentValue(0)
    }

    function result() {
        setCurrentValue(memory)
    }

    function removeDigit() {
        const currentValueString = String(currentValue)
        const newValue = currentValueString.substring(
            0,
            currentValueString.length - 1
        )
        setCurrentValue(+newValue)
    }

    return (
        <ButtonsWrapper>
            <DisplayWrapper>
                <Display
                    displayValue={currentValue}
                    setDisplayValue={setCurrentValue}
                ></Display>
            </DisplayWrapper>
            <SevenButton>
                <CalculatorButton onClick={() => addDigit(7)}>
                    7
                </CalculatorButton>
            </SevenButton>
            <EightButton>
                <CalculatorButton onClick={() => addDigit(8)}>
                    8
                </CalculatorButton>
            </EightButton>
            <NineButton>
                <CalculatorButton onClick={() => addDigit(9)}>
                    9
                </CalculatorButton>
            </NineButton>
            <ButtonWrapper>
                <CalculatorButton type="operation">DEL</CalculatorButton>
            </ButtonWrapper>
            <ButtonWrapper>
                <CalculatorButton type="operation">CLR</CalculatorButton>
            </ButtonWrapper>
            <FourButton>
                <CalculatorButton onClick={() => addDigit(4)}>
                    4
                </CalculatorButton>
            </FourButton>
            <FiveButton>
                <CalculatorButton onClick={() => addDigit(5)}>
                    5
                </CalculatorButton>
            </FiveButton>
            <SixButton>
                <CalculatorButton onClick={() => addDigit(6)}>
                    6
                </CalculatorButton>
            </SixButton>
            <ButtonWrapper>
                <CalculatorButton type="operation">X</CalculatorButton>
            </ButtonWrapper>
            <ButtonWrapper>
                <CalculatorButton type="operation">:</CalculatorButton>
            </ButtonWrapper>
            <OneButton>
                <CalculatorButton onClick={() => addDigit(1)}>
                    1
                </CalculatorButton>
            </OneButton>
            <TwoButton>
                <CalculatorButton onClick={() => addDigit(2)}>
                    2
                </CalculatorButton>
            </TwoButton>
            <ThreeButton>
                <CalculatorButton onClick={() => addDigit(3)}>
                    3
                </CalculatorButton>
            </ThreeButton>
            <ButtonWrapper>
                <CalculatorButton type="operation">-</CalculatorButton>
            </ButtonWrapper>
            <ButtonWrapper>
                <CalculatorButton>.</CalculatorButton>
            </ButtonWrapper>
            <ButtonWrapper>
                <CalculatorButton type="special" onClick={() => result()}>
                    =
                </CalculatorButton>
            </ButtonWrapper>
            <ZeroButton>
                <CalculatorButton>0</CalculatorButton>
            </ZeroButton>
            <PlusButton>
                <CalculatorButton
                    type="operation"
                    onClick={() => {
                        add()
                    }}
                >
                    +
                </CalculatorButton>
            </PlusButton>
        </ButtonsWrapper>
    )
}

export default Calculator
