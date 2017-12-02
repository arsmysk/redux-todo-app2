import TYPE from './_actionTypes'

export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: { description } })
export const toggleTodoAction = id => ({ type: TYPE.TOGGLE_TODO, payload: { id } })
export const currentAction = current => ({ type: TYPE.CURRENT, payload: { current } })
