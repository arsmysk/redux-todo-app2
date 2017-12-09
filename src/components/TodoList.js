import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const TodoList = ({ todo, filter }) => {
  return (
    <ul> {todo.filter(({ completed }) => {
      switch (filter) {
        case 'done':
          return completed
        case 'notyet':
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
  const { match } = ownProps
  return {
    todo: todo,
    filter: match.params.filter || 'all'
  }
}
export default withRouter(connect(mapStateToProps)(TodoList))
