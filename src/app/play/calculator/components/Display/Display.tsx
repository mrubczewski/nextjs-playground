import {
    DisplayInput,
    DisplayWrapper,
} from '@/app/play/calculator/components/Display/Display.styles'

function Display({
    displayValue,
    setDisplayValue,
}: Readonly<{
    displayValue: number
    setDisplayValue: (value: number) => void
}>) {
    return (
        <DisplayWrapper>
            <DisplayInput
                type="text"
                onBeforeInput={(event) => {
                    console.log(event)
                    // @ts-ignore
                    if (!/[0-9]/.test(event.data)) {
                        event.preventDefault()
                    }
                }}
                value={displayValue}
                onChange={(e) => setDisplayValue(+e.target.value)}
            ></DisplayInput>
        </DisplayWrapper>
    )
}

export default Display
