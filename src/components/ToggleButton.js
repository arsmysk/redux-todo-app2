import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default ({ type, children }) => {
  return (
    <Link to={type === 'all' ? '' : type}>{children}</Link>
  )
}
