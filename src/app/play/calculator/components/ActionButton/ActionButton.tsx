import CalculatorButton from '@/app/play/calculator/components/Button/CalculatorButton'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    onClick?: () => void
}

const ActionButton: React.FC<Props> = ({ children, onClick }) => {
    return (
        <ActionButtonElement onClick={onClick}>{children}</ActionButtonElement>
    )
}

const ActionButtonElement = styled(CalculatorButton)``
