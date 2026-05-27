import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Featurs/TodoSlice'

export default function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        const trimmedValue = input.trim()
        if (!trimmedValue) return
        dispatch(addTodo(trimmedValue))
        setInput('')
    }

    return (
        <form className="todo-form" onSubmit={addTodoHandler}>
            <input
                className="todo-input"
                type="text"
                placeholder="Add a new task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="todo-button" type="submit">
                Add Todo
            </button>
        </form>
    )
}
