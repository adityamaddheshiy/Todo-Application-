import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className="app-shell">
      <div className="todo-card">
        <header className="todo-header">
          <h1>Redux Todo App</h1>
          <p>Simple list management with Redux Toolkit</p>
        </header>

        <AddTodo />
        <Todo />
      </div>
    </div>
  )
}

export default App
