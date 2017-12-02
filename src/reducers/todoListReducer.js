import TYPE from '../actions/_actionTypes'
import todoReducer from './todoReducer'
import v4 from 'uuid/v4'


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

export default todoListReducer
