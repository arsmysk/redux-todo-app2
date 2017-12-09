import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = ({ todo, filter }) => {
  return (
    <ul> {todo.filter(({ completed }) => {
      switch (filter) {
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
const mapStateToProps = ({ todo }, ownProps) => {
  const { filter } = ownProps
  return ({ todo, filter })
}
export default connect(mapStateToProps)(TodoList)
