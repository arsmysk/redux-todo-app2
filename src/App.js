import React, { Component } from 'react';
import MyForm from './components/MyForm';
import ToggleButton from './components/ToggleButton';
import TodoList from './components/TodoList';
import v4 from 'uuid/v4'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: store.getState(),
      current: 'all'
    }
  }

  addTask = (description) => {
    const tasks = [...this.state.tasks, { id: v4(), completed: false, description: description }]
    const newState = ({ ...this.state, tasks })
    this.setState(newState)
    return newState
  }

  toggleTask = (state, id) => {
    const tasks = state.tasks.map(task => {
      if (task.id !== id) return { ...task }
      return { ...task, completed: !task.completed }
    })
    const newState = { ...state, tasks }
    return newState
  }

  render() {
    const { tasks, current } = this.state
    const that = this
    return (
      <div>
        <MyForm myEvent={description => that.addTask(description)} />
        <TodoList
          tasks={tasks}
          current={current}
          $parent={(id) => that.setState(that.toggleTask(that.state, id))} />
        <p>{this.state.current}</p>
        <ToggleButton onClick={() => this.setState(prev => ({ ...prev, current: "done" }))}>done</ToggleButton>
        <ToggleButton onClick={() => this.setState(prev => ({ ...prev, current: "not yet" }))}>not yet</ToggleButton>
        <ToggleButton onClick={() => this.setState(prev => ({ ...prev, current: "all" }))}>all</ToggleButton>
      </div>
    );
  }
}

export default App;
