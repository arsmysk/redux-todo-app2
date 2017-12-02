import React from 'react'
import { currentAction } from '../actions'
import { connect } from 'react-redux'

const ToggleButton = ({ type, children, current }) => {
  return (
    <button onClick={() => current(type)}>{children}</button>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    current: (type) => dispatch(currentAction(type))
  }
}

export default connect(undefined, mapDispatchToProps)(ToggleButton)
