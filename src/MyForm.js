import React from 'react'

export default ({ myEvent }) => {
  let input = ""
  return (
    <div>
      <input type="text" ref={node => input = node} />
      <button onClick={() => {
        myEvent(input.value)
        input.value = ""
      }
      }>Add</button>
    </div>
  )
}
