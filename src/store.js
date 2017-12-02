import { createStore } from 'redux'
import v4 from 'uuid/v4'

/** Action */
const TYPE = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
}

const initialState = [
  {
    id: v4(),
    completed: false,
    description: "My todo 1"
  },
  {
    id: v4(),
    completed: false,
    description: "My todo 2"
  },
  {
    id: v4(),
    completed: false,
    description: "My todo 3"
  }
]

export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: { description } })
export const toggleTodoAction = id => ({ type: TYPE.TOGGLE_TODO, payload: { id } })

/** Reducer */
const todoListReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPE.ADD_TODO:
      return [...state, { id: v4(), completed: false, description: payload.description }]
    case TYPE.TOGGLE_TODO:
      return todoReducer(state, action)
    default:
      return state
  }
}

const todoReducer = (state, { payload }) => {
  return state.map(task => {
    if (task.id !== payload.id) return { ...task }
    return {
      ...task,
      completed: !task.completed
    }
  })
}

export default createStore(todoListReducer)
