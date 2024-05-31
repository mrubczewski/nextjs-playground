'use client'

import { appLinks } from '@/app/consts/appLinks'
import PlayLink from '@/app/components/PlayLink/PlayLink'
import styled from 'styled-components'

export default function Home() {
    return (
        <Wrapper>
            {appLinks.map((link) => (
                <PlayLink
                    key={crypto.randomUUID()}
                    href={link.href}
                    iconName={link.iconName}
                >
                    {link.name}
                </PlayLink>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 100px;
    justify-items: center;
    align-items: center;
`
