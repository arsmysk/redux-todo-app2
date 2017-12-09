import TYPE from './_actionTypes'

export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: { description } })
export const toggleTodoAction = id => dispatch => setTimeout(() => {
  dispatch({ type: TYPE.TOGGLE_TODO, payload: { id } })
}, 500)
