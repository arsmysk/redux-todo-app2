import React from 'react'
import { toggleTodoAction } from '../actions'
import { connect } from 'react-redux'


const Todo = ({ attr: { id, completed, description }, toggleTodo }) => {
  return (
    <li style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
      onClick={() => toggleTodo(id)}
    >
      {description}
    </li>
  )
}

const mapDispatchToProps = {
  toggleTodo: toggleTodoAction
}

export default connect(undefined, mapDispatchToProps)(Todo)
