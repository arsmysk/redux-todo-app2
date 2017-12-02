export default (state, { payload }) => {
  return state.map(task => {
    if (task.id !== payload.id) return { ...task }
    return {
      ...task,
      completed: !task.completed
    }
  })
}
