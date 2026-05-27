import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Featurs/TodoSlice'

export default function Todo() {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <section className="todo-list-wrapper">
            <div className="todo-list-header">
                <h2>Tasks</h2>
                <span>{todos.length} items</span>
            </div>

            {todos.length > 0 ? (
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todo-item">
                            <span className="todo-text">{todo.text}</span>
                            <button
                                className="delete-button"
                                onClick={() => dispatch(removeTodo(todo.id))}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty-message">No todos yet. Add your first task above.</p>
            )}
        </section>
    )
}
