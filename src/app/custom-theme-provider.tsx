'use client'
import { ThemeProvider } from 'styled-components'

const THEME = {
    // https://coolors.co/palette/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226
    colors: {
        dark: 'hsl(197, 100%, 5%)',
        blue: 'hsl(190, 100%, 23%)',
        green1: 'hsl(181, 88%, 31%)',
        green2: 'hsl(160, 41%, 70%)',
        beige: 'hsl(45, 60%, 78%)',
        orange1: 'hsl(39, 100%, 47%)',
        orange2: 'hsl(30, 98%, 40%)',
        red1: 'hsl(19, 97%, 37%)',
        red2: 'hsl(5, 81%, 38%)',
        red3: 'hsl(358, 64%, 37%)',
    },
}

export function CustomThemeProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <ThemeProvider theme={THEME}>{children}</ThemeProvider>
}
