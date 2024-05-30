import styled from 'styled-components'

export const Wrapper = styled.div``

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    background-color: white;
    padding: 2rem;
    width: 80%;
    max-width: 800px;
    grid-template-areas:
        'disp disp disp disp disp'
        'seven eight nine del clr'
        'four five six multiply divide'
        'one two three plus minus'
        'zero zero dot plus equal';
    border: 2px solid grey;
    border-bottom: 4px solid grey;
    border-radius: 8px;
`

export const DisplayWrapper = styled.div`
    grid-area: disp;
    min-height: 100px;
    grid-column: 1 / 6;
`

export const ButtonWrapper = styled.div`
    aspect-ratio: 1 / 1;
`

export const OneButton = styled(ButtonWrapper)`
    grid-area: one;
`
export const TwoButton = styled(ButtonWrapper)`
    grid-area: two;
`
export const ThreeButton = styled(ButtonWrapper)`
    grid-area: three;
`
export const FourButton = styled(ButtonWrapper)`
    grid-area: four;
`
export const FiveButton = styled(ButtonWrapper)`
    grid-area: five;
`
export const SixButton = styled(ButtonWrapper)`
    grid-area: six;
`
export const SevenButton = styled(ButtonWrapper)`
    grid-area: seven;
`
export const EightButton = styled(ButtonWrapper)`
    grid-area: eight;
`
export const NineButton = styled(ButtonWrapper)`
    grid-area: nine;
`

export const ZeroButton = styled(ButtonWrapper)`
    aspect-ratio: revert;
    grid-area: zero;
`

export const PlusButton = styled(ButtonWrapper)`
    aspect-ratio: revert;
    grid-area: plus;
`
