import React from 'react'
import { addTodoAction } from '../actions'
import store from '../store'

export default () => {
  let input = ""
  return (
    <div>
      <input type="text" ref={node => input = node} />
      <button onClick={() => {
        store.dispatch(addTodoAction(input.value))
        input.value = ""
      }
      }>Add</button>
    </div>
  )
}
