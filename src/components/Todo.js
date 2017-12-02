import React from 'react'
import { toggleTodoAction } from '../actions'
import store from '../store'

export default ({ attr: { id, completed, description } }) => {
  return (
    <li style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
      onClick={() => store.dispatch(toggleTodoAction(id)
      )}
    >
      {description}
    </li>
  )
}
