import React from 'react'
import store from '../store'
import { currentAction } from '../actions'

export default ({ type, children }) => {
  return (
    <button onClick={() => store.dispatch(currentAction(type))}>{children}</button>
  )
}
