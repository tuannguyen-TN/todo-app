import React, { useState, useEffect, useRef } from 'react'
import Faker from 'faker'

function TodoForm(props) {
  const [ input, setInput ] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('')
  };

  const handleRandom = e => {
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: Faker.fake("{{random.words}}")
    });

    setInput('')
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            data-testid='input-box'
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>Add</button>
          <button onClick={handleRandom} className='todo-button'>Random</button>
        </>
      )}
    </form>

  )
}

export default TodoForm
