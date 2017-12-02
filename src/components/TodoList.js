import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = ({ todo, current }) => {
  return (
    <ul> {todo.filter(({ completed }) => {
      switch (current) {
        case 'done':
          return completed
        case 'not yet':
          return !completed
        default:
          return true
      }
    }).map((attr) => (
      <Todo
        key={attr.id}
        attr={attr}
      />
    )
      )
    }
    </ul>
  )
}
const mapStateToProps = (state) => {
  const { todo, current } = state
  return {
    todo: todo,
    current: current
  }

}

export default connect(mapStateToProps)(TodoList)
