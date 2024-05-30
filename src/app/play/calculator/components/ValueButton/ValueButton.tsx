import CalculatorButton from '@/app/play/calculator/components/Button/CalculatorButton'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    value: number
}

const ValueButton: React.FC<Props> = ({ children, value }) => {
    return <ValueButtonElement>{children}</ValueButtonElement>
}

const ValueButtonElement = styled(CalculatorButton)``
