import TYPE from '../actions/_actionTypes'

export default (state = 'all', action) => {
  switch (action.type) {
    case TYPE.CURRENT:
      return action.payload.current
    default:
      return state
  }
}
