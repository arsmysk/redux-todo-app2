import React, { Component } from 'react';
import MyForm from './components/MyForm';
import ToggleButton from './components/ToggleButton';
import v4 from 'uuid/v4'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
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
      ],
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
        <ul> {tasks.filter(({ completed }) => {
          if (current === 'done') return completed
          else if (current === 'not yet') return !completed
          else if (current === 'all') return true
        }).map(({ id, completed, description }) => (
          <li key={id}
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}
            onClick={() => that.setState(that.toggleTask(that.state, id))}
          >
            {description}
          </li>
        )
          )
        }
        </ul>
        <p>{this.state.current}</p>
        <ToggleButton onClick={prev => this.setState({ ...prev, current: "done" })}>done</ToggleButton>
        <ToggleButton onClick={prev => this.setState({ ...prev, current: "not yet" })}>not yet</ToggleButton>
        <ToggleButton onClick={prev => this.setState({ ...prev, current: "all" })}>all</ToggleButton>
      </div>
    );
  }
}

export default App;
