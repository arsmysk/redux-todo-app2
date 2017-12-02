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
const mapStateToProps = ({ todo, current }) => ({ todo, current })

export default connect(mapStateToProps)(TodoList)
