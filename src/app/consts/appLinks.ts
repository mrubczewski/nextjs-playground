import dynamicIconImports from 'lucide-react/dynamicIconImports'

export type AppLink = {
    name: string
    iconName: keyof typeof dynamicIconImports
    href: string
}
export const appLinks: AppLink[] = [
    { name: 'Calculator', iconName: 'calculator', href: '/play/calculator' },
    { name: 'Pomodoro', iconName: 'clock', href: '/play/pomodoro' },
    { name: 'Todo', iconName: 'list-todo', href: '/play/todo' },
    {
        name: 'Audio Waveform',
        iconName: 'audio-waveform',
        href: '/play/audio-waveform',
    },
]
