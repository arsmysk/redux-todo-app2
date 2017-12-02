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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodoAction(id))
  }
}

export default connect(undefined, mapDispatchToProps)(Todo)
