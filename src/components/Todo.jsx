import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>
      <div className="content">
        <h3>{todo.text}</h3>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};
export default Todo;