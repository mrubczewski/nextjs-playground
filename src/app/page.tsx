'use client'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            This is main page!
            <Link href="play/calculator">Calculator</Link>
            <Link href="play/pomodoro">Pomodoro</Link>
            <Link href="play/audio-waveform">Audio waveform</Link>
            <Link href="play/todo">Todo</Link>
        </div>
    )
}
