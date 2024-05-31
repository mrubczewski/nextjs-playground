'use client'

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import styled from 'styled-components'

interface Props {
    href: string
    iconName: keyof typeof dynamicIconImports
    children: React.ReactNode
}

const PlayLink: React.FC<Props> = ({ href, iconName, children }) => {
    const LucideIcon = dynamic(dynamicIconImports[iconName])

    return (
        <Wrapper>
            <Link href={href}>
                <LucideIcon />
                {children}
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    height: 100px;
    border-radius: 4px;
`

export default PlayLink
