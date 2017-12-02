import React from 'react'
import { toggleTodoAction } from '../actions'
import store from '../store'

const asyncProc = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id)
    }, 500)
  })
}


export default ({ attr: { id, completed, description } }) => {
  return (
    <li style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
      onClick={() =>
        asyncProc(id).then((asyncId) => store.dispatch(toggleTodoAction(asyncId))
        )}
    >
      {description}
    </li>
  )
}
