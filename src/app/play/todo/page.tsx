'use client'

import React from 'react'
import { Task } from '@/app/play/todo/models/task'
import styled from 'styled-components'
import { remove } from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/file-protocol'

function TodoApp() {
    const [tasks, setTasks] = React.useState<Task[]>([])
    const [newTaskDescription, setNewTaskDescription] =
        React.useState<string>('')

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (newTaskDescription === '') return

        const newTask = new Task(crypto.randomUUID(), newTaskDescription)
        setTasks([...tasks, newTask])
        setNewTaskDescription('')
    }

    function removeTask(taskId: string) {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    return (
        <Wrapper>
            Todo app
            <ol>
                {tasks.map((task: Task) => (
                    <li key={task.id}>
                        {task.description}{' '}
                        <button
                            onClick={() => {
                                removeTask(task.id)
                            }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
            <form onSubmit={onSubmit}>
                <input
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                />
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default TodoApp
