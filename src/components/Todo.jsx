import React from "react"

const Todo = ({ todo }) => {
  return (
    <div className="todo">
        <div className="content">
            <h3>{todo.text}</h3>
            <p className="category">{todo.category}</p>
        </div>
        <div>
            <button className="complete">Completar</button>
            <button className="remove">X</button>
        </div>
    </div>
  )
}

export default Todo