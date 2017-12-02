import React from 'react'
import { addTodoAction } from '../actions'
import { connect } from 'react-redux'

const MyForm = ({ addTodo }) => {
  let input = ""
  return (
    <div>
      <input type="text" ref={node => input = node} />
      <button onClick={() => {
        addTodo(input.value)
        input.value = ""
      }
      }>Add</button>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => dispatch(addTodoAction(value))
  }
}

export default connect(undefined, mapDispatchToProps)(MyForm)
