import { Button, ButtonStem, ButtonWrapper } from './CalculatorButton.styles'
import React from 'react'

interface Props {
    type?: ButtonType
    children: React.ReactNode
    onClick?: () => void
}

export const style = {
    default: {
        backgroundColor: 'white',
    },
    operation: {
        backgroundColor: 'lightgrey',
    },
    special: {
        backgroundColor: 'orange',
    },
}

type ButtonType = 'default' | 'operation' | 'special'

const CalculatorButton: React.FC<Props> = ({
    type = 'default',
    children,
    onClick = () => {
        console.log('empty action!')
    },
}) => {
    const [isDown, setIsDown] = React.useState(false)

    const handleMouseDown = () => setIsDown(true)
    const handleMouseUp = () => setIsDown(false)

    const buttonStyles = style[type]
    if (!buttonStyles) throw new Error('Wrong button type!')

    return (
        <ButtonWrapper>
            <Button
                onClick={onClick}
                style={{
                    ...buttonStyles,
                    transform: `translateY(${isDown ? '0px' : '-4px'})`,
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
            >
                {children}
            </Button>
            <ButtonStem />
        </ButtonWrapper>
    )
}

export default CalculatorButton
