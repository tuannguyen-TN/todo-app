import React, { useState } from 'react'
import TodoForm from './TodoForm'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <i 
        id="icons"
        className="fa fa-ban"
        onClick={() => removeTodo(todo.id)}
        ></i>
        <span>&nbsp;&nbsp;</span>
        <i 
        id="icons"
        className="fa fa-pencil"
        onClick={ () => setEdit({ id: todo.id, value: todo.text }) }
        ></i>
      </div>
    </div>
  ))
}

export default Todo
