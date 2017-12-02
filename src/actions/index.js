import TYPE from './_actionTypes'

export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: { description } })
export const toggleTodoAction = id => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ type: TYPE.TOGGLE_TODO, payload: { id } })
  }, 500)
})
export const currentAction = current => ({ type: TYPE.CURRENT, payload: { current } })
