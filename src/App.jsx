import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    
    {
      id: 1,
      text: "Criar funcionalidade TAL no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Estudar matemática",
      category: "Estudos",
      isCompleted: true,
    },
  ])

  const addTodo = (text, category) => {
    const newTodos = [... todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      isCompleted: false,
    }]

    setTodos(newTodos)
  }

  return(
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App