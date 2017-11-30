import React, { Component } from 'react';
import MyForm from './MyForm';
import v4 from 'uuid/v4'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          id: "1",
          completed: false,
          description: "My todo 1"
        },
        {
          id: "2",
          completed: false,
          description: "My todo 2"
        },
        {
          id: "3",
          completed: false,
          description: "My todo 3"
        }
      ]
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
    const { tasks } = this.state
    const that = this
    return (
      <div>
        <MyForm myEvent={description => that.addTask(description)} />
        <ul> {tasks.map(({ id, completed, description }) => (
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
      </div>
    );
  }
}

export default App;
