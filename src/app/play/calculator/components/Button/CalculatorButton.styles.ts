import styled from 'styled-components'

export const Button = styled.button`
    position: absolute;
    height: 100%;
    width: 100%;
    color: black;
    font-size: 2rem;
    border: 1px solid black;
    border-radius: 12px;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`
export const ButtonStem = styled.button`
    height: 100%;
    width: 100%;
    background-color: grey;
    border-radius: 12px;
`

export const ButtonWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    &:hover {
        filter: brightness(85%);
    }
`
